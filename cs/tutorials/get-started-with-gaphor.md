---
handle: /tutorials/get-started-with-gaphor
language: cs
layout: article
redirect_from: /pages/your-first-model.html
title: 'Začněte s aplikací Gaphor'
---

Po spuštění aplikace Gaphor se zobrazí téměř prázdné uživatelské rozhraní.
Nový model je již vytvořen a diagram je otevřen.

Rozložení rozhraní Gaphor je rozděleno do čtyř částí, a to:

-   Navigace
-   Diagramy
-   Sada nástrojů Diagram Element Toolbox
-   Podokno vlastností

Každá sekce má svou specifickou funkci.

## Navigace

V navigační části rozhraní se zobrazuje hierarchické zobrazení modelu. Do
navigační sekce se vloží každý vytvořený prvek modelu. Toto zobrazení
funguje jako strom, ve kterém můžete rozbalovat a sbalovat různé prvky
modelu. To poskytuje snadný způsob, jak zobrazit prvky vašeho modelu z
elidované perspektivy. To znamená, že můžete sbalit ty prvky modelu, které
jsou pro danou úlohu nepodstatné.

![image](/images/gaphor-treeview.png)

Na obrázku výše vidíte, že v navigačním zobrazení jsou tři prvky. Kořenový
prvek _New Model_ je balíček. Všimněte si malé šipky vedle _New Model_,
která směřuje dolů. To znamená, že prvek je rozbalený. Všimněte si také, že
dva dílčí prvky jsou mírně odsazené vzhledem k _New Model_. Element
_NewClass_ je třída a element _main_ je diagram.

V navigačním zobrazení můžete také kliknout pravým tlačítkem myši na prvky
modelu a zobrazit kontextovou nabídku. Tato kontextová nabídka umožňuje
odstraňovat prvky modelu a obnovovat navigační zobrazení.

Dvojklikem na prvek diagramu jej otevřete v části Diagram. Prvky, jako jsou
třídy a balíčky, lze přetahovat ze stromového zobrazení na diagramy.

## Sekce schémat/diagramů

The diagram section takes up the most space. Multiple diagrams can be
opened at once: they are shown in tabs. Tabs can be closed from the file
menu (Close) and by pressing <kbd>Ctrl+w</kbd>.

Většina prvků má tzv. horké zóny, zobrazené jako šedé obdélníky, které jsou
viditelné pouze tehdy, když je prvek vybrán. Dvojitým kliknutím na tyto
obdélníky můžete prvek přímo upravovat. Např. změnit jeho název.

Changes you make can be undone by pressing <kbd>Ctrl+z</kbd>. To re-do a change, hit
<kbd>Ctrl+Shift+z<kbd>.

## Toolbox

Sada nástrojů slouží především k přidávání nových položek do
diagramu. Vyberte prvek, který chcete přidat, kliknutím na něj. Po kliknutí
na diagram se vybraný prvek vytvoří. Šipka je opět vybrána, takže s prvkem
lze manipulovat.

Nástroje lze vybrat pouhým kliknutím na ně. Ve výchozím nastavení je po
každém umístění položky vybrán nástroj ukazatele. To lze změnit vypnutím
možnosti "Obnovit nástroj" v okně Předvolby. Nástroje lze vybírat také
pomocí klávesové zkratky. Aktuální znak je zobrazen jako součást nápovědy k
nástroji. Konečně je také možné přetahovat prvky na plátně ze sady nástrojů.

## Editor prvků

The Element editor can be unfolded by pressing the pensil button. This will reveal a
utility window that shows all characteristics of the selected element.
Things like name, attributes and stereotypes. It can be opened with
<kbd>Ctrl+e</kbd>.

![image](/images/elementeditor.png)

Zobrazené vlastnosti závisí na vybraném prvku.
