---
handle: /tutorials/plugins
language: hr
layout: article
redirect_from: /pages/writing-a-plugin.html
title: 'Pisanje dodatka'
---
Gaphor je izrađen tako da se može proširiti korištenjem dodataka koji
omogućuju dodatnu funkcionalnost.

## Pristup podacima vezanim uz model

Klase modela podataka nalaze se u modulu `gaphor.UML`. Objektima podataka
može se pristupiti putem ElementFactory. Ovo je posebna klasa za stvaranje i
upravljanje objektima podataka. Elementi se mogu tražiti pomoću ove tvornice
elemenata, koja je registrirana u programu kao `element_factory`. Prilikom
pisanja usluge ili dodatka, tvornica elemenata može se ubaciti u uslugu na
sljedeći način:

```python
class MyThing:
    def do_something(self):
        element_factory = Application.get_service('element_factory')
        items = element_factory.select()
```

U prozoru konzole, usluge se mogu dohvatiti korištenjem funkcije
`service()`. Na primjer:

```python
ef = service('element_factory')
```

## Ispitivanje modela podataka

Za ispitivanje se koriste dvije metode:

-   `select(query=None)` -> vraća ponavljajuće
-   `lselect(query=None)` -> vraća popis

`query` je lambda funkcija s elementom kao parametrom. Na primjer, za
dohvaćanje svih instanci klasa iz tvornice elemenata:

```python
element_factory.select(lambda e: e.isKindOf(UML.Class))
```

## Prolaženje kroz instance podataka

Kad se dobiju neke klase, mora se proći kroz nekoliko povezanih objekata za
dobivanje potrebne informacije. Na primjer: za prolaženje kroz sve parametre
vezanih uz operacije klase:

```python
for o in classes.ownedOperation:
    for p in o.ownedParameter:
        do_something(p)
```

Operator `[:]` olakšava prolaženje kroz elemente:

```python
for o in classes.ownedOperation[:].ownedParameter:
    do_something(p)
```

Također je moguće zadati upit kao dio odabira:

```python
for o in classes.ownedOperation['it.returnParameter'].ownedParameter:
    do_something(p)
```

Varijabla `it` u upitu odnosi se na ocijenjeni objekt (u tom slučaju se
uzimaju u obzir sve operacije s povratnim parametrom).

## Primjer dodatka

An example Hello World plugin is hosted on
[GitHub](https://github.com/gaphor/gaphor.plugins.helloworld).
