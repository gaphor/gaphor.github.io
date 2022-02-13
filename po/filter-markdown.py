import pathlib
import re

# HTML tags like <img src="images/matrix_org.svg" alt="matrix.org" style="height: 1em" />
html_tags = r"(<!--.*?-->|<[^>]*>)"

# Liquid capture tags like {% capture name %}
liquid_capture = r"^\{%.*%\}\n"

# Code blocks with ```code```
code_block = r"^(?:\ {4}.+\n)+(?!)|^```(?:[^`]+|`(?!``))*```"

# Note links with [1](#note1)
note_link = r"\[\d\]\(#[^ ]+(?: '.+')?\)"

re_list = [html_tags, liquid_capture, code_block, note_link]


def strip_markdown_urls(markdown):
    # This doesn't allow Markdown links to start with a number so that the note links are also captured
    return re.sub(r"\[([^0-9].*?\n?.+?)\]\(.+?\)", r"\1", markdown)


if __name__ == "__main__":

    p = pathlib.Path(__file__).parent.parent.resolve()
    for f in p.glob("**/*.md"):
        stripped = strip_markdown_urls(f.read_text())
        compiled_re = re.compile("|".join(re_list), re.MULTILINE)
        stripped = compiled_re.sub("", stripped)

        filtered_f = f.parent / f"{f.name}.filt"
        filtered_f.write_text(stripped)
