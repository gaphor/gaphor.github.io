---
title: Linux
logo: /images/linux_logo.svg
---

### Flatpak

{:.l10n}
[Flatpak](https://flatpak.org/) is the recommended way to install Gaphor in Linux. If you don't have it
setup already, follow the instructions to [install Flatpak](https://flatpak.org/setup).

<a class="btn btn-primary btn-lg" href="https://www.flathub.org/apps/details/org.gaphor.Gaphor">Install Flatpak</a>

{:.l10n}
To manually install Gaphor:

```bash
flatpak remote-add --user --if-not-exists \
    flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install --user flathub org.gaphor.Gaphor
```

### AppImage

{:.l10n}
The other option if you are running a recent Linux distribution is to use the
[AppImage](https://appimage.org/). It is built using Ubuntu 18.04 and most likely
won't work on older versions.

<a class="btn btn-primary btn-lg" href="https://github.com/gaphor/gaphor/releases/download/{{ site.gaphor_version }}/Gaphor-{{ site.gaphor_version }}-x86_64.AppImage"><i class="fa fa-download l10n"></i> Download AppImage</a>

```bash
chmod +x Gaphor-VERSION-x86_64.AppImage
./Gaphor-VERSION-x86_64.AppImage
```

### Arch Linux

{:.l10n}
Gaphor can be installed from an [AUR package](https://aur.archlinux.org/packages/python-gaphor/).
