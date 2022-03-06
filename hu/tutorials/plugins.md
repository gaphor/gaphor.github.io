---
handle: /tutorials/plugins
language: hu
layout: article
redirect_from: /pages/writing-a-plugin.html
title: 'Writing a Plugin'
---
Gaphor is designed to be extensible by using plugins that allow you to
extend the functionality.

## Accessing Model Related Data

The datamodel classes are located in the `gaphor.UML` module. Data objects
can be accessed through the ElementFactory. This is a special class for
creating and managing data objects. Items can be queried using this element
factory, which is registered in the application as `element_factory`. When
writing a service or plugin the element factory can be injected into the
service like this:

```python
class MyThing:
    def do_something(self):
        element_factory = Application.get_service('element_factory')
        items = element_factory.select()
```

In the console window services can be retrieved by using the `service()`
function. For example:

```python
ef = service('element_factory')
```

## Querying the Data Model

Two methods are used for querying:

-   `select(query=None)` -> returns an iterator
-   `lselect(query=None)` -> returns a list

`query` is a lambda function with the element as parameter. For example, to
fetch all of the Class instances from the element factory:

```python
element_factory.select(lambda e: e.isKindOf(UML.Class))
```

## Traversing Data Instances

Once some classes are obtained, it is common to traverse through a few
related objects in order to get the required information. For example: to
iterate through all parameters related to a class' operations:

```python
for o in classes.ownedOperation:
    for p in o.ownedParameter:
        do_something(p)
```

Using the `[:]` operator items can be traversed more easily:

```python
for o in classes.ownedOperation[:].ownedParameter:
    do_something(p)
```

It's also possible to provide a query as part of the selection:

```python
for o in classes.ownedOperation['it.returnParameter'].ownedParameter:
    do_something(p)
```

The variable `it` in the query refers to the evaluated object (in this case
all operations with a return parameter are taken into account).

## Example Plugin

An example Hello World plugin is hosted on
[GitHub](https://github.com/gaphor/gaphor.plugins.helloworld).
