---
title: Building Python packages with Meson and PDM
author: Arjan Molenaar
lang: en
---

In this post I’ll outline a workflow for developing native extensions for Python. The build tool of choice is
[Meson](http://mesonbuild.com/), and we’ll use [PDM](https://pdm-project.org) to ensure a frictionless developer
experience.

For a long time, C extensions for Python can be built with
[setuptools](https://setuptools.pypa.io/en/latest/userguide/ext_modules.html). Although this works fine for simple
extension, it gets tedious if your extension needs to link to other libraries. In those cases it's often necessary to
write custom code in `setup.py` to find and link to those libraries.

Instead of the `setup.py` approach, you can use a build tool such as Meson. For me, Meson is favored, due to how simple
it is to configure. The downside is, however, that Meson packages cannot be installed directly by
[Pip](https://pip.pypa.io/), the de-facto package installer for Python. That's where
[meson-python](https://mesonbuild.com/meson-python/) comes in: it provides the glue to seamlessly run Meson builds from
a Python context.

## Meson

Meson is a generic build tool. It can be used to build code for many languages, including C, Rust, and Python. It
contains constructs that make it relatively easy to build binaries on different platforms.

Meson itself is built in Python. This makes it highly portable.

## meson-python

C, or Rust code needs to be compiled to a library, before it can be used in Python. This poses a bit of a problem, since
it breaks the easy write-and-run flow Python developers are used to. meson-python has us covered though: instead of
installing the library directly, it installs a small stub that recompiles the code before it’s loaded. Now, from a Python
point of view it’s write-and-run again.

There’s a small caveat however: in order to recompile, your package needs to be installed in [_non-isolated_
mode](https://pip.pypa.io/en/stable/reference/build-system/pyproject-toml/#build-isolation). This means that the code is
compiled in your current python environment. This implies that all build dependencies have been installed before the
_non-isolated_ build is performed.

Doing this from the command line with pip gets tedious pretty quickly. Even more if you want to customize a few Meson
build settings.

# PDM

PDM is a generic dependency manager. Contrary to tools like Poetry and Hatch, it’s build backend independent. It plays
well with meson-python.

PDM allows to customize the install and build commands in a generic way, from `pyproject.toml`. We can make non-isolated
builds the default in the development environment without the need to provide extra command line arguments. The
arguments are there, but in `pyproject.toml`, so you will not forget them.

PDM also allows for installing development specific dependencies. Those are installed before our package. This way we
can ensure the right version of Meson is installed, as well as the meson-python build backend. Remember that we need to
make sure the build backend should be already available if we do non-isolated builds.

# Example

I've created a [small example project](https://github.com/amolenaar/meson-python-pdm-example) that shows how to
configure PDM.

To install a meson-python project in editable mode, you'll need to install your package
like:

```bash
pip install meson-python meson ninja
pip install --no-build-isolation -e .
```

With PDM, we can reduce this to:

```bash
pdm install
```

And as a bonus it creates a virtual environment too.

To make PDM install all dependencies in non-isolated mode, a bit of configuration is needed in `pyproject.toml`:

```toml
[tool.pdm.options]
install = ["--no-isolation"]
```

This will, however, install all dependencies in non-isolated mode. If all our dependencies are installed in non-isolated
mode, that means all packages required for building should be installed as well.

Since Meson depends on setuptools (and no wheels are provided), that means setuptools needs to be installed somehow.

The easiest way is to add setuptools to the list of to-be installed packages. If it's only setuptools that you need,
it's probably fine to use the first option.

    ```toml
    [tool.pdm.dev-dependencies]
    build = [
        "setuptools",
        "meson-python>=0.16.0",
        "ninja>=1.8.2"
    ]
    ```

If it gets more complicated, you may want to consider adding a pre-install hook that makes sure our build dependencies
are present. Since we use the `sync` command in the pre-install hook, the `install` options are ignored.

```toml
[tool.pdm.dev-dependencies]
build = [
    "meson-python>=0.16.0",
    "ninja>=1.8.2"
]

[tool.pdm.scripts]
pre_install = "{pdm} sync --skip=:all --group=build --no-self"
```

This option works because PDM is building wheels before installing and those wheels are cached.

# Conclusion

The trio Meson, meson-python and PDM make it possible to build extension modules for Python in any language. PDM can
handle the (virtual) environment and allows for a smooth onboarding and developer experience.
