"""Replace language yaml setting for Markdown files.

Opens the translated Markdown files and replaces the language
setting in the front matter so that it matches the translated
language.

Also removes filt files created with the filter-markdown.py script.
"""


import pathlib
import re


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
                    if "_tutorials/" in line:
                        line = line.replace("_tutorials/", f"_{language}/tutorials/")
                    f.write(line)


def cleanup_filt_files():
    filt_files = pathlib.Path(".").glob("**/*.filt")
    for file in filt_files:
        file.unlink()


if __name__ == "__main__":
    replace_language_string()
    cleanup_filt_files()
