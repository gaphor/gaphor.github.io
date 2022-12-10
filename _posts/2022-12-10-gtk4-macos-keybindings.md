---
title: macOS keyboard shortcuts with GTK 4
author: Arjan Molenaar
image_url: /images/gtk4-macos-keybindings/bg.jpg
image_background: #f0f0f0
image_attribution: https://www.istockphoto.com/en/photo/laptop-keyboard-gm491528360-75794947
language: en
---

[GTK](https://gtk.org) is a cross-platform toolkit. It's a key component for the [GNOME desktop](https://gnome.org),
[GIMP](https://gimp.org), [Inkscape](https://inkscape.org), and many other high quality open source desktop
applications. GTK 4 is the most
recent major version, the long awaited successor of GTK+ 3. For desktop applications there's a lot
to gain by porting to GTK 4. First and foremost because GTK 4 takes full support of your GPU. 

For Gaphor we provide binaries for Linux, Windows and macOS. 

GTK 4 no longer maps it's keyboard shortcuts to macOS native keybindings. While <kbd>Ctrl</kbd> is used
on Linux and Windows, <kbd>Command</kbd> is used on macOS as primary modifier key.
Although that's inconventient, it's not as bad as it sounds.

<!--break-->

## Why care about macOS

Let's take a step back. Why should we even care about macOS as a target platform?

For our project it is a must to run on all platforms. Gaphor is a tool that requires
collaboration and we do not want to leave out Windows and
macOS users. After all, macOS is a popular platform for software development.

We want to let as many people as possible use and experience open source software. Therefore we can't simply build an application only for Linux: it would exclude a lot of potential users. By bringing the software to their platform, they can experience what it is to use open source software<sup>[1](#footnotes)</sup>.

For Gaphor there are many benefits upgrading the macOS binary to GTK 4: the responsiveness of the application improves _a lot_. A whole lot. GTK 4 runs as fast as a native macOS application.

## Application defined shortcuts

For shortcuts we define in our application, we're in control.

In GTK the <kbd>Command</kbd> key is represented by the `Meta` keyboard modifier.

GTK+ 3 has a keyboard modifier called `<Primary>`. It maps to <kbd>Command</kbd> on macOS and <kbd>Ctrl</kbd> on Linux and Windows.
In GTK 4, `<Primary>` is an alias for `<Control>`.
There's good reason the GTK developers want to drop the `Primary` key modifier: the translation from Linux to macOS key bindings is not as simple as switching <kbd>Ctrl</kbd> for <kbd>Command</kbd>. For example: where Linux uses <kbd>Home</kbd> to move the cursor to the beginning of a line, macOS uses <kbd>Command</kbd>+<kbd>←</kbd>.

There are still a lot of common shortcuts, for example for saving (<kbd>Ctrl</kbd>+<kbd>s</kbd>) and opening files (<kbd>Ctrl</kbd>+<kbd>o</kbd>). For those cases we can simply re-enstate the old `Primary` behavior:

```python
def platform_specific_modifier(shortcut):
    """Shortcuts are written like `<Primary>s`.
    """
    return shortcut.replace(
        "<Primary>",
        "<Meta>" if sys.platform == "darwin" else "<Control>"
    )

def new_shortcut(shortcut, detailed_name):
    return Gtk.Shortcut.new(
        trigger=Gtk.ShortcutTrigger.parse_string(platform_specific_modifier(shortcut)),
        action=Gtk.NamedAction.new(detailed_name),
    )

...
new_shortcut("<Primary>s", "win.save-file")
```

## Built-in widgets

For built-in widget, we have to use a different strategy. The keyboard shortcuts are defined on class level. GTK's own classes.
Subclassing does not help us.

We do not try to map _all_ shortcuts, only the important ones: copy/paste, undo/redo, cursor navigation.

Thanks to the modular design of GTK 4, only two widgets need some extra shortcuts: [Gtk.Text](https://docs.gtk.org/gtk4/class.Text.html) and [Gtk.TextView](https://docs.gtk.org/gtk4/class.TextView.html). The existing shortcuts are not in the way, so they can remain as is.

Although it's recommented to add keyboard shortcuts during class construction, you can also add shortcuts on class level
after the class has been created.

```python
def new_shortcut_with_args(shortcut, signal, *args):
    shortcut = Gtk.Shortcut.new(
        trigger=Gtk.ShortcutTrigger.parse_string(shortcut),
        action=Gtk.SignalAction.new(signal),
    )
    if args:
        shortcut.set_arguments(GLib.Variant.new_tuple(*args))
    return shortcut


Gtk.TextView.add_shortcut(
    new_shortcut_with_args(
        "<Meta>a", "select-all",
        GLib.Variant.new_boolean(True)
    )
)
```

To find the right shortcuts to map, I had a look at the [GTK source code](https://gitlab.gnome.org/GNOME/gtk/) and the documentation on [Mac keyboard shortcuts](https://support.apple.com/en-us/HT201236). The translation to macOS shortcuts is really straight forward.

If you want to know now it's implemented in Gaphor, have a look at our [macOS shim module](https://github.com/gaphor/gaphor/blob/main/gaphor/ui/macosshim.py).

## Closing thought

When you port an application to another platform, there is always a bit of custom code involved. That's not a problem. It's an chance to tailor the user experience to the target platform. Providing a good user experience is crucial to attract and retain users.

---
<div id="footnotes"></div>

1. As a matter of fact a large portion of contributions come from users running Gaphor on Windows!
