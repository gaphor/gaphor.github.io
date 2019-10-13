Title: Install Gaphor in macOS

We are still working on packaging GTK with Gaphor and it is currently an
installation pre-requisite.

1. Install [homebrew](https://brew.sh)
1. Open a terminal and execute:
```bash
$ brew install gobject-introspection gtk+3
```

Then install Gaphor on macOS using the [latest gaphor-macOS.dmg
installer](https://github.com/gaphor/gaphor/releases/download/1.0.2/gaphor-macOS-1.0.2.dmg)


Note: Sometimes launching the app the first time after installation fails due
to macOS security settings, please attempt to launch it a 2nd time if this
happens.
