---
title: Linux
logo: /images/linux_logo.svg
---

To install Gaphor in Linux use [install Flatpak](https://flatpak.org/setup), if it's not on your system yet. Flatpak allows us to provide Gaphor for all Linux platforms.

Once Flatpak is installed, install Gaphor:

```bash
$ flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
$ flatpak install --user flathub org.gaphor.Gaphor
```

### Arch Linux

Gaphor can be installed from an [AUR package](https://aur.archlinux.org/packages/python-gaphor/).
