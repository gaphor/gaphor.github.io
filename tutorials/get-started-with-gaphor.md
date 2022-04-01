---
title: Get started with Gaphor
redirect_from: /pages/your-first-model.html
language: en
handle: /tutorials/get-started-with-gaphor
layout: article
---

Once Gaphor is launched, it provides you an almost empty user interface.
A new model is already created and the diagram is opened.

The layout of the Gaphor interface is divided into four sections,
namely:

-   Navigation
-   Diagrams
-   Diagram Element Toolbox
-   Properties pane

Each section has its own specific function.

## Navigation

The navigation section of the interface displays a hierarchical view of
your model. Every model element you create will be inserted into the
navigation section. This view acts as a tree where you can expand and
collapse different elements of your model. This provides an easy way to
view the elements of your model from an elided perspective. That is, you
can collapse those model elements that are irrelevant to the task at
hand.

![image](/images/gaphor-treeview.png)

In the figure above, you will see that there are three elements in
the navigation view. The root element, _New Model_ is a package. Notice
the small arrow beside _New Model_ that is pointing downward. This
indicates that the element is expanded. You will also notice the two
sub-elements are slightly indented in relation to _New Model_. The
_NewClass_ element is a class and the _main_ element is a diagram.

In the navigation view, you can also right-click the model elements to
get a context menu. This context menu allows you to delete model
elements, and to refresh the navigation view.

Double clicking on a diagram element will open it in the Diagram
section. Elements such as classes and packages can be dragged from the
tree view on the diagrams.

## Diagram Section

The diagram section takes up the most space. Multiple diagrams can be
opened at once: they are shown in tabs. Tabs can be closed from the file
menu (Close) and by pressing <kbd>Ctrl+w</kbd>.

Most elements have hot zones, shown as gray rectangles that are only
visible when the item is selected. Double clicking on those rectangles
allows you to directly edit the item. E.g. change its name.

Changes you make can be undone by pressing <kbd>Ctrl+z</kbd>. To re-do a change, hit
<kbd>Ctrl+Shift+z<kbd>.

## Toolbox

The toolbox is mainly used to add new items to a diagram. Select
the element you want to add by clicking on it. When you click on the
diagram, the selected element is created. The arrow is selected again,
so the element can be manipulated.

Tools can be selected by simply clicking on them. By default the pointer
tool is selected after every item placement. This can be changed by
disabling the "Reset tool" option in the Preferences window. Tools can
also be selected by a keyboard shortcut. The actual character is displayed
as part of the tooltip. Finally it is also possible to drag elements on the
canvas from the toolbox.

## Element Editor

The Element editor can be unfolded by pressing the pensil button. This will reveal a
utility window that shows all characteristics of the selected element.
Things like name, attributes and stereotypes. It can be opened with
<kbd>Ctrl+e</kbd>.

![image](/images/elementeditor.png)

The properties shown depend on the element that is selected.
