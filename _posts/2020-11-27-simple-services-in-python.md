---
title: Simple services in Python
author: Arjan Molenaar
image_url: /images/wikipedia-angolan-python.jpg
image_attribution: https://commons.wikimedia.org/wiki/File:Angolan_python_(Python_anchietae)_head.jpg
language: en
---

As a project grows, at some point there is a desire for a
plug-in/add-ons/extension mechanism. Therefore, it is a good idea to think of
this early in the project.

For those of us that build applications in Python, extensibility is like a walk
in the park. It's part of the Python ecosystem, thanks to [entry
points](https://packaging.python.org/specifications/entry-points/).

<!--break-->

Entry points form the basis for plugin libraries like
[pluggy](https://github.com/pytest-dev/pluggy). Before you reach for a
library, you may want to consider what it takes to make your application
extensible.

It all starts with
[`importlib.metadata`](https://docs.python.org/3/library/importlib.metadata.html),
which is part of the Python standard library since Python 3.8. For older
versions (Python 3.6 and 3.7) a library
[`importlib_metadata`](https://pypi.org/project/importlib-metadata/) (notice
the underscore) can be used instead, providing the same
functionality. If you go back in history even more, 
setuptools' [`pkg_resources`](https://setuptools.readthedocs.io/en/latest/pkg_resources.html)
was used to provide this functionality.

To view all entry points available in your python installation:

```python
>>> import importlib.metadata
>>> for ep in importlib.metadata.entry_points():
...     print(ep)
... 
console_scripts
distutils.commands
distutils.setup_keywords
egg_info.writers
flake8.extension
flake8.report
pytest11
setuptools.finalize_distribution_options
setuptools.installation
sphinx.html_themes
virtualenv.create
```

As you can see, we have quite a few entry points available. Some are for
distutils and one is for pytest. Sphinx, Flake8, and setuptools also provide
extension points. Even though they are shown above as text, they can also be
iterated:

```python
>>> entry_point = importlib.metadata.entry_points()["distutils.commands"]
>>> entry_point
[EntryPoint(name='build', value='setuptools.command.build:build', group='distutils.commands'),
...
EntryPoint(name='test', value='setuptools.command.test:test', group='distutils.commands'),
EntryPoint(name='upload_docs', value='setuptools.command.upload_docs:upload_docs', group='distutils.commands')]
```

A plugin can also be loaded:

```python
>>> entry_point[0].load()
<class 'setuptools.command.build.build'>
```

In this case, it will resolve to a class, but it can also resolve to a variable
or function depending on what is defined in the entry point.

Entry points can also point to modules, as is the case with Sphinx themes:

```python
>>> entry_point = importlib.metadata.entry_points()["sphinx.html_themes"]
>>> entry_point
[EntryPoint(name='alabaster', value='alabaster', group='sphinx.html_themes')]
>>> entry_point[0].load()
<module 'alabaster' from '/usr/lib/python3.11/site-packages/alabaster/__init__.py'>
```

Note that the colon (`:`) is missing from the entry point value, so it loads the module.

As we have seen, it is straight forward to load an entry point. Next, lets look
at how to define our own.

First we need something that acts as entry point. Let's create a new project with a file
`myapp/module.py`. In this file we create a little class:

```python
# myapp/module.py
class MyClass:
    pass
```

This is what it takes to add our entry point to a `pyproject.toml` when you're using setuptools:

```toml
[project]
name = "myapp"
version = "0.0.1"

[project.entry-points."myapp"]
my_class = "myapp.module:MyClass"
```

Now, let's create and activate a simple virtual environment and install our new package:

```bash
python -m venv .venv
source .venv/bin/activate
pip install -e .
```

If you prefer [Poetry](https://python-poetry.org/), the `pyproject.toml` config looks like this:

```toml
[tool.poetry]
name = "myapp"
version = "0.0.1"
description = "Entry points demo"
authors = ["Arjan Molenaar"]

[tool.poetry.plugins."myapp"]
"my_class" = "myapp.module:MyClass"
```

Poetry takes care of creating a virtual environment, so you can simply call:

```bash
poetry install
poetry shell
```

Now, let's load our newly created entry points:

```python
>>> import importlib.metadata
>>> entry_point = importlib.metadata.entry_points()["myapp"]
[EntryPoint(name='my_class', value='myapp.module:MyClass', group='myapp')]
```

To conclude: every application can be made extensible in Python. Extensibility
is basically free with entry points. Think about extensibility early in your
project.
