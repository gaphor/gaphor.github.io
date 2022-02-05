---
title: A history of Gaphor
author: Arjan Molenaar
image_url: /images/roitberg-clocks.jpg
image_attribution: >
  José Roitberg - RIO DE JANEIRO FLEA MARKET OLD WATCHES APR 2011.
  https://www.flickr.com/photos/roitberg/5603167669
---

{:.l10n}
Gaphor as a project has been around for almost 19 years.
I checked the source code repository and I made the first commit on December 21, 2001.

{:.l10n}
The project started after I had an intership where I had to work with Rational Rose.
This product was (and is, I suppose) very complex and has a high learning curve.
I thought I could do better. With that attitude I started writing my own UML modeling tool.

<!--break-->

{:.l10n}
One of the first choices to make for a GUI application is the toolkit to use.
[GTK+](https://gtk.org) seemed like a solid option: it's 100% open source (contrary to QT, for example),
and was used in big projects, such as [GIMP](https://gimp.org) and (GNOME)[https://gnome.org].
Looking back, I'm still happy with that decision.

{:.l10n}
The main component of a diagramming tool is the canvas. I worked on Linux at the time and
the most complete diagramming application at the time was Dia. I could not reuse their
canvas component, though, since it was interwoven with the rest of the application.
The initial canvas component for Gaphor I called [Diacanvas](http://diacanvas.sourceforge.net/).
It mimics the behavior of Dia (and Visio) and was used to build the first couple of versions of Gaphor.

{:.l10n}
The Diacanvas library was written in C. Gaphor was written in Python from the start.
At some point this started to cause friction. In 2006 the canvas library was rewritten in Python and [Gaphas](https://github.com/gaphor/gaphas) was born. At this time [Artur](https://github.com/wrobell) and me were th emain contributors.

{:.l10n}
The project moved on, but lost traction after the 0.17.1 release in September 2011.

{:.l10n}
In early 2017 [Dan Yeaw](https://github.com/danyeaw) contacted me. He wanted to work in Gaphor and add SysML support.
At this time, I was no longer working on Gaphor at all, so Dan became the maintainer.
The main repository moved to the Gaphor organization at GitHub and Dan made a huge effort to bring the code up to date.
The source code was hardly updated since 2011. A time where Python 2 was the norm and GTK+ 2 was the GUI toolkit (PyGTK).
By now, Python 3 was the norm and GTK+ 3 had been available for years.

{:.l10n}
At some point &mdash; it's late 2018 &mdash; Dan got stuck and we had a video call to discuss the issues he ran into migrating and updating Gaphor.
I agreed to help out a bit to get him going. I guess the help never stopped.
Working on Gaphor again made me realize how much fun it is to work on such a project.

{:.l10n}
It took us more than a year to get the code and internals up to date, to a level we felt confident we can add another modeling language.
Gaphor 2.0 is the result. A fully updated modeling environment for casual users and die-hard modelers.
The application is rapitly improving and the user base is growing.

{:.l10n}
Give [Gaphor a try]({% link download.html %}) and let us know what you think!
