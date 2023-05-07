"""Build translation files

1. Run po4a against the *.md files
2. Opens the translated Markdown files and replaces the language
setting in the front matter so that it matches the translated
language.
"""

import re
import subprocess
from pathlib import Path


def replace_language_string():
    conf_file = Path("po") / "po4a.conf"
    with conf_file.open() as f:
        line = f.readline()
        pattern = "\[po4a_langs\] (.*)"
        match = re.search(pattern, line)
        languages = match[1].split()

    blogs_and_pages = ["_pages", "tutorials", "_usps", "_platforms"]
    for folder in blogs_and_pages:
        for language in languages:
            lang_folder = Path(folder) / language
            markdown_files = lang_folder.glob('*.md')
            for file in markdown_files:
                with file.open("r") as f:
                    lines = f.readlines()
                with file.open("w") as f:
                    for line in lines:
                        if "lang: en" in line:
                            line = line.replace("lang: en", f"lang: {language}")
                        f.write(line)


if __name__ == "__main__":
    print("Running po4a to build po files for translation")
    result = subprocess.run(["po4a", "-v", "-f", "po/po4a.conf"])
    print(result)
    print("Replace language header info on markdown files")
    replace_language_string()
