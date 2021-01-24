---
title: Linux
logo: /images/linux_logo.svg
---

### Flatpak

[Flatpak](https://flatpak.org/) is the recommended way to install Gaphor in Linux. If you don't have it
setup already, follow the instructions to [install Flatpak](https://flatpak.org/setup).

<a class="btn btn-primary btn-lg" href="https://www.flathub.org/apps/details/org.gaphor.Gaphor"><i class="fa fa-download"></i> Install Flatpak</a>

To manually install Gaphor:

```bash
$ flatpak remote-add --user --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
$ flatpak install --user flathub org.gaphor.Gaphor
```

### AppImage

The other option if you are running a recent Linux distribution is to use the
[AppImage](https://appimage.org/). It is built using Ubuntu 20.04 and most likely
won't work on older versions.

<a class="btn btn-primary btn-lg" href="https://github.com/gaphor/gaphor/releases/download/{{ site.gaphor_version }}/Gaphor-{{ site.gaphor_version }}-x86_64.AppImage"><i class="fa fa-download"></i> Download AppImage</a>

```bash
$ chmod +x Gaphor-VERSION-x86_64.AppImage
$ ./Gaphor-VERSION-x86_64.AppImage
```

### Arch Linux

Gaphor can be installed from an [AUR package](https://aur.archlinux.org/packages/python-gaphor/).
