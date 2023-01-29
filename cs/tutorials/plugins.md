---
handle: /tutorials/plugins
language: cs
layout: article
redirect_from: /pages/writing-a-plugin.html
title: 'Psaní zásuvného modulu'
---

Gaphor je navržen tak, aby byl rozšiřitelný pomocí zásuvných modulů, které
vám umožní rozšířit jeho funkce.

## Přístup k datům souvisejícím s modelem

Třídy datového modelu se nacházejí v modulu `gaphor.UML`. K datovým objektům
lze přistupovat prostřednictvím ElementFactory. Jedná se o speciální třídu
pro vytváření a správu datových objektů. Na prvky se lze dotazovat pomocí
této továrny na prvky, která je v aplikaci registrována jako
`element_factory`. Při psaní služby nebo zásuvného modulu lze továrnu na
prvky injektovat do služby takto:

```python
class MyThing:
    def do_something(self):
        element_factory = Application.get_service('element_factory')
        items = element_factory.select()
```

V okně konzole lze služby načíst pomocí funkce `service()`. For example:

```python
ef = service('element_factory')
```

## Dotazování na datový model

Pro dotazování se používají dvě metody:

-   `select(query=None)` -> vrací iterátor
-   `lselect(query=None)` -> vrací seznam

`dotaz` je lambda funkce s prvkem jako parametrem. Například pro načtení
všech instancí třídy z továrny na prvky:

```python
element_factory.select(lambda e: e.isKindOf(UML.Class))
```

## Procházení datových instancí

Po získání některých tříd je běžné projít několik souvisejících objektů, aby
bylo možné získat požadované informace. Například: iterovat přes všechny
parametry související s operacemi třídy:

```python
for o in classes.ownedOperation:
    for p in o.ownedParameter:
        do_something(p)
```

Pomocí operátoru `[:]` lze položky procházet snadněji:

```python
for o in classes.ownedOperation[:].ownedParameter:
    do_something(p)
```

V rámci výběru je také možné zadat dotaz:

```python
for o in classes.ownedOperation['it.returnParameter'].ownedParameter:
    do_something(p)
```

Proměnná `it` v dotazu odkazuje na vyhodnocovaný objekt (v tomto případě se
berou v úvahu všechny operace s návratovým parametrem).

## Příklad pluginu

An example Hello World plugin is hosted on
[GitHub](https://github.com/gaphor/gaphor.plugins.helloworld).
