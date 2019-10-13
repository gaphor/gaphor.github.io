#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Arjan J. Molenaar and Dan Yeaw'
SITENAME = 'Gaphor'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Detroit'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Theme
THEME = 'themes/pelican-bootstrap3'
JINJA_ENVIRONMENT = {'extensions': ['jinja2.ext.i18n']}
PLUGIN_PATHS = ['plugins']
PLUGINS = ['i18n_subsites']
BOOTSTRAP_THEME = 'flatly'
GITHUB_USER = 'Gaphor'
GITHUB_REPO_COUNT = 3
CC_LICENSE = 'CC-BY-SA'

STATIC_PATHS = ['images']

# Disable generation of tag related pages
TAGS_SAVE_AS = ''
TAG_SAVE_AS = ''

# Customize menu
DISPLAY_CATEGORIES_ON_MENU = False
DISPLAY_PAGES_ON_MENU = False

MENUITEMS = (
    ('Download', '/pages/download.html'),
    ('About', '/pages/about.html'),
    ('Tutorials', '/pages/tutorials.html'),
    ('How-to', '/pages/how-to.html'),
    ('Discuss', '/pages/discuss.html'),
    ('Developers', '/pages/developers.html'),
)

DEFAULT_PAGINATION = False
