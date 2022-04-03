---
handle: /tutorials/get-started-with-gaphor
language: hr
layout: article
redirect_from: /pages/your-first-model.html
title: 'Počni raditi s Gaphorom'
---

Nakon pokretanja Gaphora, program pruža gotovo prazno korisničko
sučelje. Novi model je već stvoren i dijagram otvoren.

Izgled sučelja Gaphora je podijeljen u četiri odjeljka, naime:

-   Navigacija
-   Dijagrami
-   Kutija alata za elemente dijagrama
-   Ploča svojstava

Svaki odjeljak ima vlastitu specifičnu funkciju.

## Navigacija

Odjeljak navigacije prikazuje hijerarhijski pogled na model. Svaki element
modela koji stvaraš umetnut će se u odjeljak navigacije. Ovaj pogled djeluje
kao stablo u kojem možeš rasklopiti i sklopiti različite elemente modela. To
pruža jednostavan način za pregled elemenata modela iz perspektive
izostavljanja, odnosno možeš sklopiti elemente modela koji nisu važni za
zadatak.

![image](/images/gaphor-treeview.png)

U gornjoj slici vidjet ćeš da postoje tri elementa u prikazu
navigacije. Osnovni element, _Novi model_ je paket. Obrati pažnju na malu
strelicu pored _Novi model_ koja je usmjerena prema dolje. To znači da je
element rasklopljen. Također ćeš primijetiti da su dva podelementa malo
uvučena u odnosu na _Novi model_. Element _Nova klasa_ je klasa, a element
_glavni_ je dijagram.

U prikazu navigacije također možeš desnom tipkom miša pritisnuti elemente
modela za dobivanje kontekstnog izbornika. Ovaj kontekstni izbornik
omogućuje brisanje elemenata modela i aktualiziranje prikaza navigacije.

Dvostrukim pritiskom na element dijagrama, element će se otvorit u odjeljku
„Dijagram”. Elementi kao što su klase i paketi, mogu se povući iz stablastog
prikaza na dijagrame.

## Odjeljak dijagrama

The diagram section takes up the most space. Multiple diagrams can be
opened at once: they are shown in tabs. Tabs can be closed from the file
menu (Close) and by pressing <kbd>Ctrl+w</kbd>.

Većina elemenata ima vruće zone, koji se prikazuju kao sivi pravokutnici i
koji su vidljivi samo kad je element odabran. Dvostrukim pritiskom na te
pravokutnike omogućuje izravno uređivanje elementa. Npr. promijeniti ime.

Changes you make can be undone by pressing <kbd>Ctrl+z</kbd>. To re-do a change, hit
<kbd>Ctrl+Shift+z<kbd>.

## Kutija alata

Kutija alata se uglavnom koristi za dodavanje novih elemenata
dijagramu. Odaberi element koji želiš dodati pritiskom na njega. Kad
pritisneš na dijagram, stvara se odabrani element. Strelica se ponovno bira,
tako da se elementom može manipulirati.

Alati se mogu odabrati jednostavnim pritiskom. Prema standardnim postavkama
pokazivač se bira nakon svakog postavljanja elementa. To se može promijeniti
deaktiviranjem opcije „Resetiraj alat” u prozoru „Postavke”. Alati se
također mogu odabrati tipkovnim prečacem. Stvarni znak se prikazuje kao dio
savjeta alata. Na kraju krajeva, elementi se također mogu povući na platno
iz kutije alata.

## Uređivač elemenata

The Element editor can be unfolded by pressing the pensil button. This will reveal a
utility window that shows all characteristics of the selected element.
Things like name, attributes and stereotypes. It can be opened with
<kbd>Ctrl+e</kbd>.

![image](/images/elementeditor.png)

Prikazana svojstva ovise o elementu koji je odabran.
