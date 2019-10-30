Title: The Gaphor manual

If you're new to Gaphor, modeling or UML then this section is for you.


1. [Prologue, why Gaphor](prologue.html)
1. [Introduction](#introduction)
1. [Working with Gaphor](#working-with-gaphor)
1. [Your first model](#your-first-model)
1. [Extending models](#extending-models)


<a name="introduction"></a>
# Introduction

Welcome to the Gaphor!

Gaphor is a UML modeling application written in Python. It is designed
to be easy to use, while still being powerful. Gaphor implements a
fully-compliant UML 2 data model, so it is much more than a picture
drawing tool. You can use Gaphor to quickly visualize different aspects
of a system as well as create complete, highly complex models.

Gaphor is designed around the following principles:

-   Simplicity The application should be easy to use. Only some basic knowledge
of UML is required.
-   Consistency UML is a graphical modeling language, so all modeling is done
in a diagram. For example, even stereotypes are modeled in diagrams.
-   Workability The application should not bother the user every time they do
something non-UML-ish.

This manual serves as a reference for all Gaphor has to offer. So, you
may read it from start to finish, or jump to a section that interests
you.

<a name="working-with-gaphor"></a>
# Working with Gaphor

Once Gaphor is launched, it provides you an almost empty user interface.
A new model is already created and the diagram is opened.

The layout of the Gaphor interface is divided into four sections,
namely:

-   Navigation
-   Main Canvas Diagram
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

![image]({attach}gaphor-treeview.png)

In the figure on the left, you will see that there are three elements in
the navigation view. The root element, New Model is a package. Notice
the small arrow beside New Model that is pointing downward. This
indicates that the element is expanded. You will also notice the two
sub-elements are slightly indented in relation to New Model. The
NewClass element is a class and the main element is a diagram.

In the navigation view, you can also right-click the model elements to
get a context menu. This context menu allows you to delete model
elements, and to refresh the navigation view.

Double clicking on a diagram element will open it in the Diagram
section. Elements such as classes and packages can be dragged from the
tree view on the diagrams.

## Diagram Section

The diagram section takes up the most space. Multiple diagrams can be
opened at once: they are shown in tabs. Tabs can be closed from the file
menu (Close) and by pressing Ctrl+w.

Most elements have hot zones, shown as gray rectangles that are only
visible when the item is selected. Double clicking on those rectangles
allows you to directly edit the item. E.g. change its name or change the
name of an association end.

## Toolbox

The toolbox is mainly used to add new diagram items to a diagram. Select
the element you want to add by clicking on it. When you click on the
diagram, the selected element is created. The arrow is selected again,
so the element can be manipulated.

Tools can be selected by simply clicking on them. By default the pointer
tool is selected after every item placement. This can be changed by
disabling the Diagram > Reset tool option. Tools can also be selected
by a keyboard shortcut. The actual character is displayed as part of the
tooltip. Finally it is also possible to drag elements on the canvas from
the toolbox.

## Element Editor

The Element editor is not really part of the main screen, it's a
utility window that shows all characteristics of the selected element.
Things like name, attributes and stereotypes. It can be opened with
Ctrl+e.

![image]({attach}elementeditor.png)

The properties shown depend on the element that is selected.

<a name="your-first-model"></a>
# Your first model

Once Gaphor is started a new empty model is automatically created. The
main diagram is already open in the Diagram section.

Select an element you want to place (e.g. a class) by clicking on the icon in
the Toolbox and click on the diagram. This will place a new Class item instance
on the diagram and add a new Class to the model (it shows up in the Navigation.
The selected tool will reset itself to the Pointer tool if the option ''Diagram
-> Reset tool'' is selected.

![image]({attach}oneclass.png)

It's simple to add elements to a diagram.

Some elements are not directly visible. The section in the toolbox is
collapsed and needs to be clicked first to reveal its contents.

Gaphor does not make any assumptions about which elements should be
placed on a diagram. A diagram is a diagram. UML defines all different
kinds of diagrams, such as Class diagrams, Component diagrams, Action
diagrams, Sequence diagrams. But Gaphor does not restrict the user.

## Creating New Diagrams

![image]({attach}navpopup.png)

To create a new diagram, use the Navigation. Select an element that can
contain a diagram (a Package or Profile) and right-click (command-click in
macOS). Select New diagram and a new diagram is created.

## Copy and Paste

Items in a diagram can be copied and pasted (in the same diagram or
another). A paste will create new items in the diagrams, the items they
represent (e.g. the Class that's shown in the Navigation) is *not*
copied (call it a shallow copy if you like).

## Drag and Drop

Adding an existing element to a diagram is simple: drag the element from
the Navigation section onto a diagram. Not all elements that show up in
the Navigation can be added: Diagrams and attribute/operations of a
Class can not be added.

Elements can also be dragged within the Navigation section. This way
classes and packages can be rearranged for example.

<a name="extending-models"></a>
# Extending models

The UML method to extend UML (basic) components with a special meaning
is by using stereotypes. A stereotype defines a special usage of a model
element. For example: a class that's used as a controller can be
assigned a stereotype "controller". Stereotypes are always enclosed
in guilemets: `«` and `»`.

Creating a stereotype starts by the creation of a Profile normally.
Although stereotypes can be created in every package, it's a good habit
to use Profiles for that. Next a Metaclass has to be created. The
metaclass will tell the stereotype on which kind of elements it is
applicable. A Stereotype can be connected to the Metaclass by means of
an Extension relationship.

![image]({attach}simplestereotype.png)

Stereotypes can be applied to basically all elements in a model.

![image]({attach}stereotypedclass.png)

Stereotypes can contain attributes, as shown in the diagram above. Those
attributes can be filled in the Element Editor. This allows for enormous
flexibility. In most cases, especially if some sort of program logic has
to be generated from the models, it is very handy to define special
behaviours to classes and other elements by means of stereotypes.

![image]({attach}stereotypeedit.png)

