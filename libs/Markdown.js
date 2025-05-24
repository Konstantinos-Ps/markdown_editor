import { marked } from 'marked';

// Configure marked options for better output
marked.setOptions({
  breaks: true, // Convert \n to <br>
  gfm: true,    // Enable GitHub Flavored Markdown
});

// Convert markdown string to HTML
export const parseMarkdown = (markdownText) => {
  if (!markdownText) return '';
  return marked(markdownText);
};

// Sample markdown content for the editor
export const sampleMarkdown = `# Welcome to Markdown Editor

This is a **simple** and *elegant* markdown editor built with Next.js!

## Features

- Live preview
- Syntax highlighting
- Clean interface
- Responsive design

### Code Example

\`\`\`javascript
const greeting = "Hello, Markdown!";
console.log(greeting);
\`\`\`

### Lists

**Unordered List:**
- Item 1
- Item 2
- Item 3

**Ordered List:**
1. First item
2. Second item
3. Third item

### Links and Images

[Visit GitHub](https://github.com)

### Blockquote

> "The best way to predict the future is to create it." - Peter Drucker

### Table

| Feature | Status |
|---------|--------|
| Editor | ✅ |
| Preview | ✅ |
| Export | ✅ |

---

Happy writing! 🚀
`;
