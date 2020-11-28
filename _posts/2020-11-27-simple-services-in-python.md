---
title: Simple services in Python
author: Arjan Molenaar
image_url: /images/wikipedia-angolan-python.jpg
image_attribution: >
 https://commons.wikimedia.org/wiki/File:Angolan_python_(Python_anchietae)_head.jpg
---

As a project grows, at some point there is a desire for a
plug-in/add-ons/extension mechanism. Therefore, it is a good idea to think of
this early in the project.

For those of us that build applications in Python, extensibility is like a walk
in the part. It's part of the Python ecosystem, thanks to [entry
points](https://packaging.python.org/specifications/entry-points/).

<!--break-->

Entry points form the basis for plugin libraries like
[pluggy](https://github.com/pytest-dev/pluggy). Before you reach for a
library, you may want to consider what it takes to make your application
extensible.

To be honest, it is not that hard to provide a simple plugin mechanism. In
Gaphor it takes [around 60 lines of
code](https://github.com/gaphor/gaphor/blob/master/gaphor/entrypoint.py). Not
enough code for a library even.

It all starts with
[`importlib.metadata`](https://docs.python.org/3/library/importlib.metadata.html),
which is part of the Python standard library since Python 3.8. For older
versions (Python 3.6 and 3.7) a library
[`importlib_metadata`](https://pypi.org/project/importlib-metadata/) (notice
the underscore) can be used instead, providing the same
functionality<sup>[1](#note-1)</sup>.

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
gaphor.services
pytest11
setuptools.finalize_distribution_options
setuptools.installation
sphinx.html_themes
virtualenv.create
```

As you can see, we have quite a few entry points available. Some are for
distutils and one is for pytest. Flake8, setuptools, and gaphor also provide
extension points. Even though they are shown above as text, they can also be
iterated:

```python
>>> entry_point = importlib.metadata.entry_points()["gaphor.services"]
>>> entry_point
(EntryPoint(name='component_registry', value='gaphor.services.componentregistry:ComponentRegistry', group='gaphor.services'), ...)
```

A plugin can also be loaded:

```python
>>> entry_point[0].load()
<class 'gaphor.services.componentregistry.ComponentRegistry'>
```

In this case, it will resolve to a class, but it can also resolve to a module
or function depending on what is defined in the entry point.

As we have seen, it is straight forward to load an entry point. Next, lets look
at how to define our own.

This is what it would take to add an entry point for Gaphor using `setup.py`:

```python
from setuptools import setup, find_packages

setup(
    ...
    entry_points = {
        'gaphor.services': [
            'helloworld = gaphor.plugins.helloworld:HelloWorldPlugin',
        ]
    }
)
```

Using the more modern Poetry config (`pyproject.toml`), we can also define
entry points:

```toml
...
[tool.poetry.plugins."gaphor.services"]
"helloworld" = "gaphor_helloworld_plugin:HelloWorldPlugin"
...
```

So... if reading entry points takes about 2 lines of code, what are the other
58 lines about? Most of it is dependency resolution: In Gaphor services can
take other services as an argument. We will discuss that some other time :).

To conclude: every application can be made extensible in Python. Extensibility
is basically free with entry points. Think about extensibility early in your
project.

---
Notes

1. <a name="note-1"></a>In Python 2,
[`pkg_resources`](https://setuptools.readthedocs.io/en/latest/pkg_resources.html)
in setuptools is used to provide this functionality.
