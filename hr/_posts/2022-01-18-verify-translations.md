---
author: 'Arjan Molenaar'
image_attribution: https://www.freepik.com/
image_background: ~
image_url: /images/translations.jpg
language: hr
title: 'Verify translations'
---

Gaphor has translations in more than a dozen languages. Not all translations
are 100%, and in most cases that’s not a problem. Thanks to the power of
Open Source, everyone can contribute with translations for your project.

After our latest release we found out, by a user, that one of the
translations had an error. “An error?”, I hear you ask, “How is that
possible?”

<!--break-->

First some background.

A common tool for translations is
[Gettext](https://www.gnu.org/software/gettext/). Translations are
maintained in `.po` files, portable object files. Those files typically
contain the original text and a translation.

```gettext
msgid "I’m a message"
msgstr "Ik ben een bericht"
```

The `msgid` contains the original text. For most applications that’s the
text in American English. The `msgstr` contains the translated text. If
`msgstr` contains no translation (it’s and empty string `""`), the original
text is used.

Translated text is not only _just text_. Sometimes this text contains
placeholders that have to be filled in by the application. Think of things
like version numbers, or a file name. We learned that hard way that an error
is easily made.

The way placeholders are formatted depends on the language. In C, texts contain
`%`-mark expressions (`I counted %d items`). Javascript uses a different
format: `I counted ${count} items`<sup>[1](#note1)</sup>. In Python the
C-style can be used (old style) as well as curly-bracket placehodlers with the
`str.format()` method: `I counted {count} items`.

Now assume the text `I counted {count} items` has to be translated. The term
`count` is case-sensitive. For example, a slight error in the Dutch
translation could cause an unintended error in the application: `Ik telde
{Count} items`.

To avoid errors we created [a small
script](https://github.com/gaphor/gaphor/blob/master/po/check-babel.py),
using [Babel](http://babel.pocoo.org/). Babel is a Python based
internationalization library. Using babel, we read the translations from a
`.po` file and check if all placeholders from the original text (`{count}`)
are in the translated text.  A simple check, one that ensures that
placeholders in translated text can always be filled in. This script can
also check for other conventions you want to uphold in your translatable
text. For example, you may not want to use empty placeholders `{}` or
explicitly check for `%`-based placeholders. In our case we also check for
HTML entities (e.g. &amp;lt;).

Adding these tests will help us ensure that a future mistake in a
translation file that could prevent Gaphor from launching, will be caught
automatically.

#### Notes

1. <a name="note1"></a>This is actually a template string in Javascript. It
   takes some extra effort to make those translatable.

