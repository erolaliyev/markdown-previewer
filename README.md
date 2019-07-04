# Markdown Previewer

![Markdown Previewer](https://github.com/erolaliyev/markdown-previewer/blob/master/dist/images/markdown-previewer.png)

- User stories:

  - I can see a `textarea` element with a corresponding `id="editor"`.
  - I can see an element with a corresponding `id="preview"`.
  - When I enter text into the `#editor` element, the `#preview` element is updated as I type to display the content of the textarea.
  - When I enter GitHub flavored markdown into the `#editor` element, the text is rendered as HTML in the `#preview` element as I type.
  - When my markdown previewer first loads, the default text in the `#editor` field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
  - When my markdown previewer first loads, the default markdown in the `#editor` field should be rendered as HTML in the `#preview` element.
  - Optional: When I click a link rendered by my markdown previewer, the link is opened up in a new tab.
  - Optional: My markdown previewer interprets carriage returns and renders them as `br` (line break) elements.

- Stack:

  - React
  - styled-components
  - webpack

- [Live Preview](https://erol-fcc-markdown-previewer.surge.sh/)
