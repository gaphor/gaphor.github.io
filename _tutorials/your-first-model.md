---
title: Your First Model
redirect_from: /pages/working-with-gaphor.html
language: en
---

Once Gaphor is started a new empty model is automatically created. The
main diagram is already open in the Diagram section.

Select an element you want to place (e.g. a class) by clicking on the icon in
the Toolbox and click on the diagram. This will place a new Class item instance
on the diagram and add a new Class to the model (it shows up in the Navigation.
The selected tool will reset itself to the Pointer tool after the element is placed
on the diagram.

![image](/images/oneclass.png)

It's simple to add elements to a diagram.

Some elements are not directly visible. The section in the toolbox is
collapsed and needs to be clicked first to reveal its contents.

Gaphor does not make any assumptions about which elements should be
placed on a diagram. A diagram is a diagram. UML defines all different
kinds of diagrams, such as Class diagrams, Component diagrams, Action
diagrams, Sequence diagrams. But Gaphor does not place any restrictions.

## Creating New Diagrams

![image](/images/navpopup.png)

To create a new diagram, use the Navigation section. Select an element that can
contain a diagram (a Package or Profile) and right-click. Select New diagram
and a new diagram is created. As of Gaphor 1.1.0 a buttion is available in the
header bar. Select a package and you'll notice the button is not grayed out and
can be clicked, resulting in a new diagram being added to the model.

## Copy and Paste

Items in a diagram can be copied and pasted (in the same diagram or
another). A paste will create new items in the diagrams, the items they
represent (e.g. the Class that's shown in the Navigation) is *not*
copied (call it a shallow copy if you like).

This way you can easely create visual copies of the same (underlaying) model element.

## Drag and Drop

Adding an existing element to a diagram is simple: drag the element from
the Navigation section onto a diagram. Not all elements that show up in
the Navigation can be added: Diagrams and attribute/operations of a
Class can not be added.

Elements can also be dragged within the Navigation section. This way
classes and packages can be rearranged for example.

