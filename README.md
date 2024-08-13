# [Gaphor.org website](https://gaphor.org)



## Development Environment with Linux

Install [rbenv](https://github.com/rbenv/rbenv) and [ruby-build](https://github.com/rbenv/ruby-build)

```sh
$ rbenv install 3.3.4
$ rbenv global 3.3.4
$ gem install ruby bundler
$ bundle install
$ bundle exec jekyll serve
```

## Translation

This project is using the [jekyll-polyglot](https://github.com/untra/polyglot)
plugin.

There are two different ways in which content on the website is translated.


### Strings

If you are adding content to the home page, footer, navigation, or
other static parts of the website, not Jekyll posts/pages, then
it is done using
[localised site data](https://github.com/untra/polyglot#localized-sitedata).

Say you want to add a new paragraph to the home page.
Firstly, add a new entry to the `_data/strings.yml` file:

```yaml
index:
  thousand-words: >
    A picture is worth a thousand words. Describe and document your
    applications and systems with Gaphor to enhance knowledge sharing.
...
```

Then, reference this from the `index.html` file:

```markdown
{{ site.data.strings.index.thousand-words }}
```

If you need to reference many strings in a single `.md` file, then it is also
possible to first assign a variable:


```markdown
{% assign strings = site.data.strings.index %}
{{ strings.thousand-words }}
```

### Pages and Blog

For the pages and posts, translation happens by conversion Markdown into _gettext_ using
[po4a](https://po4a.org).
When a new `.md` file is added to `_pages/` or `_posts/` directory, then you
need to run:
```bash
$ python po/build.py
```

This will extract the strings from all Markdown files in these two directories
and output them to `po/site.pot`.  These will then subsequently be translated by
Weblate into additional files such as `po/site.cs.po`.

### Configuring Weblate

The translation setup is designed to work with three different Weblate Components:

* Website (navigation, footer, sidebars)
* Pages and Blog
* Website News

Below is the list of important properties to set when adding a new Weblate component.
These are important or else the translation system will not work.
It does not document the more simple things such as Name/URL/etc.

#### Website

* **File mask:** `_data/*/strings.yml`
* **Monolingual base language file:** `_data/strings.yml`
* **Edit base file:** No
* **Base file for new translations:** `_data/strings.yml`
* **File format:** YAML file
* **Priority:** Very high

#### Pages and Blog

* **File mask:** `po/site.*.po`
* **Edit base file:** No
* **Base file for new translations:** `po/site.pot`
* **File format:** Gettext PO file

---

The theme is based on the [Illdy theme](https://colorlib.com/wp/themes/illdy/).
