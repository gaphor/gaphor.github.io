---
handle: /tutorials/your-first-model
language: es
layout: article
redirect_from: /pages/working-with-gaphor.html
title: 'Su primer modelo'
---

Una vez que se inicia Gaphor, se crea automáticamente un modelo nuevo
vacío. El diagrama principal ya está abierto en la sección Diagrama.

Seleccione un elemento que desee colocar (por ejemplo, una clase) haciendo
clic en el icono de la caja de herramientas y haga clic en el diagrama. Esto
colocará una nueva instancia de elemento de clase en el diagrama y añadirá
una nueva clase al modelo (se muestra en la Navegación.  La herramienta
seleccionada se restablecerá a la herramienta puntero después de que el
elemento sea colocado en el diagrama.

![image](/images/oneclass.png)

Es sencillo añadir elementos a un diagrama.

Algunos elementos no son directamente visibles. La sección de la caja de
herramientas está colapsada y es necesario hacer clic primero para revelar
su contenido.

Gaphor no hace ninguna suposición sobre los elementos que deben colocarse en
un diagrama. Un diagrama es un diagrama. UML define todos los diferentes
tipos de diagramas, tales como diagramas de clase, diagramas de componentes,
diagramas de acción, diagramas de secuencia. Pero Gaphor no pone ninguna
restricción.

## Crear diagramas nuevos

![image](/images/navpopup.png)

Para crear un diagrama nuevo, use la sección de Navegación. Seleccione un
elemento que pueda contener un diagrama (un paquete o un perfil) y haga clic
con el botón derecho del ratón. Seleccione Diagrama nuevo y se creará un
nuevo diagrama. A partir de Gaphor 1.1.0 hay un botón disponible en la barra
de encabezado. Seleccione un paquete y notará que el botón no está en gris y
puede ser pulsado, lo que resulta en un nuevo diagrama que se añade al
modelo.

## Copiar y pegar

Los elementos de un diagrama pueden copiarse y pegarse (en el mismo diagrama
o en otro). Un pegado creará elementos nuevos en los diagramas, los
elementos que representan (por ejemplo, la clase que se muestra en la
navegación) no se *copian* (llámelo copia superficial si lo desea).

De este modo, puede crear fácilmente copias visuales del mismo elemento del
modelo (subyacente).

## Arrastrar y soltar

Añadir un elemento existente a un diagrama es sencillo: arrastre el elemento
desde la sección de Navegación a un diagrama. No todos los elementos que
aparecen en la Navegación pueden ser añadidos: Los diagramas y
atributos/operaciones de una clase no pueden ser añadidos.

Los elementos también se pueden arrastrar dentro de la sección de
navegación. De esta manera se pueden reordenar, por ejemplo, las clases y
los paquetes.

