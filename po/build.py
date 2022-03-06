"""Build translation files

1. Filter markdown files for translations.
2. Opens the translated Markdown files and replaces the language
setting in the front matter so that it matches the translated
language.
3. Remove filt files created with the filter-markdown.py script.
"""

import pathlib
import re
import subprocess

# HTML tags like <img src="images/matrix_org.svg" alt="matrix.org" style="height: 1em" />
html_tags = r"(<!--.*?-->|<[^>]*>)"

# Liquid capture tags like {% capture name %}
liquid_capture = r"^\{%.*%\}\n"

# Code blocks with ```code```
code_block = r"^(?:\ {4}.+\n)+(?!)|^```(?:[^`]+|`(?!``))*```"

# Note links with [1](#note1)
note_link = r"\[\d\]\(#[^ ]+(?: '.+')?\)"

# Redirects like redirect_from: /pages/download.html
redirects = r"\/.+?.html"

re_list = [html_tags, liquid_capture, code_block, note_link, redirects]


def strip_markdown_urls(markdown):
    # This doesn't allow Markdown links to start with a number so that the note links are also captured
    return re.sub(r"\[([^0-9].*?\n?.+?)\]\(.+?\)", r"\1", markdown)


def replace_language_string():
    conf_file = pathlib.Path("po") / "po4a.conf"
    with conf_file.open() as f:
        line = f.readline()
        pattern = "\[po4a_langs\] (.*)"
        match = re.search(pattern, line)
        languages = match.group(1).split()

    for language in languages:
        markdown_files = pathlib.Path(language).glob("**/*.md")
        for file in markdown_files:
            with file.open("r") as f:
                lines = f.readlines()
            with file.open("w") as f:
                for line in lines:
                    if "language: en" in line:
                        line = line.replace("language: en", f"language: {language}")
                    f.write(line)


def cleanup_filt_files():
    filt_files = pathlib.Path(".").glob("**/*.filt")
    for file in filt_files:
        file.unlink()


if __name__ == "__main__":
    print("Filtering markdown before po4a conversion")
    p = pathlib.Path(__file__).parent.parent.resolve()
    for f in p.glob("**/*.md"):
        stripped = strip_markdown_urls(f.read_text())
        compiled_re = re.compile("|".join(re_list), re.MULTILINE)
        stripped = compiled_re.sub("", stripped)

        filtered_f = f.parent / f"{f.name}.filt"
        filtered_f.write_text(stripped)
    print("Running po4a to build po files for translation")
    result = subprocess.run(["po4a", "-v", "po/po4a.conf"])
    print(result)
    print("Replace language header info on markdown files")
    replace_language_string()
    print("Clean up filt files")
    cleanup_filt_files()
