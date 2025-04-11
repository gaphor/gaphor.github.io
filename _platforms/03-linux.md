---
title: Linux
logo: /images/linux_logo.png
lang: en
---

### Flatpak

[Flatpak](https://flatpak.org/) is the recommended way to install Gaphor in
Linux. If you don't have it setup already, follow the instructions to [install
Flatpak](https://flatpak.org/setup).

<a href="https://flathub.org/apps/org.gaphor.Gaphor"><img width="240" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-en.png"/></a>

To manually install Gaphor:

```bash
flatpak remote-add --user --if-not-exists \
    flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install --user flathub org.gaphor.Gaphor
```

### Arch Linux

The Gaphor [Arch package](https://archlinux.org/packages/extra/any/gaphor/) can be
installed with:

```bash
sudo pacman -S gaphor
```
