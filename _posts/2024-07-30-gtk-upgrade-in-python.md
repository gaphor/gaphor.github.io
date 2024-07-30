---
title: Upgrading GTK based Python applications
author: Arjan Molenaar
lang: en
---

A hot topic in the GNOME world is upgrading applications from GTK+ 3 to GTK 4
and libadwaita.
For Gaphor, we completed this task around a year ago, but I never took time
to write how we did it.

<!--break-->

* We knew beforehand that the upgrade would take a long time.
* We may even run into problems that have to be solved in GTK 4 first.
* We disliked the idea of maintaining a separate branch for the GTK 4 upgrade.

The upgrade itself took about two years (April 2021 - May 2023).
In those years we made several releases.
The code bundled both GTK+ 3 and GTK 4 code. At some point our macOS and Windows
release was GTK+ 3, while the Linux Flatpak build was already running on GTK 4.

Our secret sauce:

```python
if Gtk.get_major_version() == 3:
    ...  # GTK+ 3 calls
else:
    ...  # GTK 4 equivalent
```

Yup. That's all. That, and good test coverage. We made sure that the GTK code was fully
covered.

We could switch GTK version based on an environment variable.

```python
import gi

gtk_version = "4.0" if os.getenv("GAPHOR_USE_GTK") == "4" else "3.0"

gi.require_version("Gtk", gtk_version)
gi.require_version("Gdk", gtk_version)
```

CI builds were run for both toolkit versions.

The "keep the shop open" approach allowed us to implement new features and fix bugs, while simultaneously working on the
GTK 4 upgrade. For a long time, we could only run unit tests with GTK 4. Only when enough code was upgraded, we could
start Gaphor and do some interactive testing.

Side effect of this upgrade was that it allowed us to rewrite some code in a more library independent way, which should
make future upgrades simpler.

At some point everything worked, and we've done GTK 4 based releases on all platforms. Only then we removed all version
checks and changed the code to use the new version.

This approach is not specific to Python, and may even be applicable to some
compiled languages. I hope this post shows you that your GTK 4 upgrade doesn't have to
be a big bang. Happy upgrading!
