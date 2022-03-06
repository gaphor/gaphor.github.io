# [Gaphor.org website](https://gaphor.org)



The theme is based on the [Illdy theme](https://colorlib.com/illdy/).


## Development Environment with Linux

Install [rbenv](https://github.com/rbenv/rbenv) and [ruby-build](https://github.com/rbenv/ruby-build)

```sh
$ rbenv install 2.7.5
$ rbenv global 2.7.5
$ gem install ruby bundler
$ bundle install
$ bundle exec jekyll serve
```

## Translation

Translation happens by conversion Markdown into _gettext_ using
[po4a](https://po4a.org). To generate the _.md_ files from the _gettext .po_
files, run:
```bash
$ python po/filter-markdown.py
$ po4a po/po4a.conf
$ python po/set-language.py
```
