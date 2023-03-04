---
handle: /tutorials/plugins
language: es
layout: article
redirect_from: /pages/writing-a-plugin.html
title: 'Escribir un plugin'
---

Gaphor está diseñado para ser extensible mediante el uso de plugins que
permiten ampliar la funcionalidad.

## Acceso a los datos relacionados con el modelo

Las clases del modelo de datos se encuentran en el módulo `gaphor.UML`. Se
puede acceder a los objetos de datos a través de ElementFactory. Esta es una
clase especial para crear y gestionar objetos de datos. Los elementos pueden
ser consultados usando esta fábrica de elementos, que se registra en la
aplicación como `element_factory`. Cuando se escribe un servicio o plugin la
fábrica de elementos puede ser inyectada en el servicio de esta manera:

```python
class MyThing:
    def do_something(self):
        element_factory = Application.get_service('element_factory')
        items = element_factory.select()
```

En la ventana de la consola se pueden recuperar los servicios usando la
función `service()`. Por ejemplo:

```python
ef = service('element_factory')
```

## Consultar el modelo de datos

Para la consulta se usan dos métodos:

-   `select(query=None)` -> devuelve un iterador
-   `lselect(query=None)` -> devuelve una lista

`query` es una función lambda con el elemento como parámetro. Por ejemplo,
para obtener todas las instancias de Class de la fábrica de elementos:

```python
element_factory.select(lambda e: e.isKindOf(UML.Class))
```

## Recorrer las instancias de datos

Una vez obtenidas algunas clases, es habitual recorrer algunos objetos
relacionados para obtener la información necesaria. Por ejemplo: para iterar
a través de todos los parámetros relacionados con las operaciones de una
clase:

```python
for o in classes.ownedOperation:
    for p in o.ownedParameter:
        do_something(p)
```

Usando el operador `[:]` los elementos pueden ser recorridos más fácilmente:

```python
for o in classes.ownedOperation[:].ownedParameter:
    do_something(p)
```

## Ejemplo de plugin

An example Hello World plugin is hosted on
[GitHub](https://github.com/gaphor/gaphor.plugins.helloworld).
