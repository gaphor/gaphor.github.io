---
handle: /tutorials/get-started-with-gaphor
language: es
layout: article
redirect_from: /pages/your-first-model.html
title: 'Empezar con Gaphor'
---

Una vez que se lanza Gaphor, le ofrece una interfaz de usuario casi vacía.
Ya se ha creado un modelo nuevo y se ha abierto el diagrama.

El diseño de la interfaz de Gaphor se divide en cuatro secciones, que son:

-   Navegación
-   Diagramas
-   Caja de herramientas de elementos de diagrama
-   Panel de propiedades

Cada sección tiene su función específica.

## Navegación

La sección de navegación de la interfaz muestra una vista jerárquica de su
modelo. Cada elemento del modelo que cree se insertará en la sección de
navegación. Esta vista actúa como un árbol en el que puede expandir y
colapsar diferentes elementos de su modelo. Esto proporciona una manera
fácil de ver los elementos de su modelo desde una perspectiva elidida. Es
decir, puede contraer aquellos elementos del modelo que son irrelevantes
para la tarea que está realizando.

![image](/images/gaphor-treeview.png)

En la figura anterior, verá que hay tres elementos en la vista de
navegación. El elemento raíz, _Modelo nuevo_ es un paquete. Observe la
pequeña flecha al lado de _Modelo nuevo_ que apunta hacia abajo. Esto indica
que el elemento está expandido. También observará que los dos subelementos
están ligeramente sangrados en relación con _Modelo nuevo_. El elemento
_NewClass_ es una clase y el elemento _main_ es un diagrama.

En la vista de navegación, también puede hacer clic con el botón derecho en
los elementos del modelo para obtener un menú contextual. Este menú
contextual permite eliminar elementos del modelo y actualizar la vista de
navegación.

Al hacer doble clic en un elemento del diagrama, éste se abrirá en la
sección de diagramas. Los elementos como las clases y los paquetes pueden
ser arrastrados desde la vista de árbol en los diagramas.

## Sección de diagramas

The diagram section takes up the most space. Multiple diagrams can be
opened at once: they are shown in tabs. Tabs can be closed from the file
menu (Close) and by pressing <kbd>Ctrl+w</kbd>.

La mayoría de los elementos tienen zonas calientes, mostradas como
rectángulos grises que sólo son visibles cuando el elemento está
seleccionado. Haciendo doble clic en esos rectángulos se puede editar
directamente el elemento. Por ejemplo, cambiar su nombre.

Changes you make can be undone by pressing <kbd>Ctrl+z</kbd>. To re-do a change, hit
<kbd>Ctrl+Shift+z<kbd>.

## Caja de herramientas

La caja de herramientas se usa principalmente para añadir elementos nuevos a
un diagrama. Seleccione el elemento que desee añadir haciendo clic sobre
él. Al hacer clic en el diagrama, se crea el elemento seleccionado. La
flecha se selecciona de nuevo, por lo que el elemento puede ser manipulado.

Las herramientas se pueden seleccionar simplemente haciendo clic sobre
ellas. Por defecto, la herramienta del puntero se selecciona después de la
colocación de cada elemento. Esto puede cambiarse desactivando la opción
"Reiniciar herramienta" en la ventana de Preferencias. Las herramientas
también pueden seleccionarse mediante un atajo del teclado. El carácter real
se muestra como parte de la información sobre la herramienta. Por último,
también es posible arrastrar elementos al lienzo desde la caja de
herramientas.

## Editor de elementos

The Element editor can be unfolded by pressing the pensil button. This will reveal a
utility window that shows all characteristics of the selected element.
Things like name, attributes and stereotypes. It can be opened with
<kbd>Ctrl+e</kbd>.

![image](/images/elementeditor.png)

Las propiedades mostradas dependen del elemento seleccionado.
