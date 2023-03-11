---
handle: /tutorials/plugins
language: nl
layout: article
redirect_from: /pages/writing-a-plugin.html
title: 'Plug-ins schrijven'
---

Gaphor is ontworpen om uitbreidbaar te zijn met behulp van plug-ins waarmee
u de functionaliteit kunt uitbreiden.

## Toegang tot modelgerelateerde gegevens

De gegevensmodelklassen bevinden zich in de module
`gaphor.UML`. Gegevensobjecten kunnen worden benaderd via de
ElementFactory. Dit is een speciale klasse voor het maken en beheren van
gegevensobjecten. Items kunnen worden opgevraagd met behulp van deze element
factory, welke in de app wordt geregistreerd als `element_factory`. Bij het
schrijven van een service of plug-in kan de element factory als volgt in de
service worden geïnjecteerd:

```python
class MyThing:
    def do_something(self):
        element_factory = Application.get_service('element_factory')
        items = element_factory.select()
```

In het consolevenster kunnen services worden opgevraagd met de functie
`service()`. Bijvoorbeeld:

```python
ef = service('element_factory')
```

## Gegevens uit het datamodel opvragen

Er zijn twee methoden om gegevens op te vragen:

-   `select(query=None)` -> geeft een iterator terug
-   `lselect(query=None)` -> geeft een lijst terug

`query` is een lambda-functie met het element als parameter. Bijvoorbeeld,
om alle Class-instanties van de element factory op te halen:

```python
element_factory.select(lambda e: e.isKindOf(UML.Class))
```

## Gegevens­instanties doorlopen

Zodra sommige klassen zijn verkregen, is het gebruikelijk om enkele
gerelateerde objecten te doorlopen om de vereiste informatie te
verkrijgen. Bijvoorbeeld: het doorlopen van alle parameters met betrekking
tot de operaties van een klasse:

```python
for o in classes.ownedOperation:
    for p in o.ownedParameter:
        do_something(p)
```

Met behulp van de operator `[:]` kunnen items gemakkelijker worden
doorlopen:

```python
for o in classes.ownedOperation[:].ownedParameter:
    do_something(p)
```

## Voorbeeld-plug-in

An example Hello World plugin is hosted on
[GitHub](https://github.com/gaphor/gaphor.plugins.helloworld).
