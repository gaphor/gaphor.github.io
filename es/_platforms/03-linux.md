---
language: es
logo: /images/linux_logo.png
title: Linux
---

### Flatpak

[Flatpak](https://flatpak.org/) es la forma recomendada de instalar Gaphor en
Linux. Si aún no lo tiene instalado, siga las instrucciones para
[instalar Flatpak](https://flatpak.org/setup).

<a href='https://flathub.org/apps/details/org.gaphor.Gaphor'><img width='240' alt='Download on Flathub' src='https://flathub.org/assets/badges/flathub-badge-en.png'/></a>

Para instalar Gaphor manualmente:

```bash
flatpak remote-add --user --if-not-exists \
    flathub https://dl.flathub.org/repo/flathub.flatpakrepo
flatpak install --user flathub org.gaphor.Gaphor
```

### AppImage

La otra opción si está ejecutando una distribución reciente de Linux es usar
[AppImage](https://appimage.org/). Está construido usando Ubuntu 18.04 y
lo más probable es que no funcione en versiones anteriores.

<a class="btn btn-primary btn-lg" href="https://github.com/gaphor/gaphor/releases/download/{{ site.gaphor_version }}/Gaphor-{{ site.gaphor_version }}-x86_64.AppImage"><i class="fa fa-download"></i> Descargar AppImage</a>

```bash
chmod +x Gaphor-{{ site.gaphor_version }}-x86_64.AppImage
./Gaphor-{{ site.gaphor_version }}-x86_64.AppImage
```

Si está usando Wayland y el AppImage se bloquea, puede forzarlo a usar
el backend X11 en su lugar.

```bash
GDK_BACKEND=x11 ./Gaphor-{{ site.gaphor_version }}-x86_64.AppImage
```

### Arch Linux

Gaphor puede instalarse desde un [paquete
AUR](https://aur.archlinux.org/packages/python-gaphor/).
