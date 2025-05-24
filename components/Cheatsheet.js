const Cheatsheet = () => {
  const syntaxExamples = [
    {
      category: "Headers",
      examples: [
        { syntax: "# H1", description: "Main heading" },
        { syntax: "## H2", description: "Section heading" },
        { syntax: "### H3", description: "Subsection heading" }
      ]
    },
    {
      category: "Text Formatting",
      examples: [
        { syntax: "**bold text**", description: "Bold text" },
        { syntax: "*italic text*", description: "Italic text" },
        { syntax: "`code`", description: "Inline code" },
        { syntax: "~~strikethrough~~", description: "Strikethrough text" }
      ]
    },
    {
      category: "Lists",
      examples: [
        { syntax: "- Item 1\n- Item 2", description: "Unordered list" },
        { syntax: "1. Item 1\n2. Item 2", description: "Ordered list" }
      ]
    },
    {
      category: "Links & Images",
      examples: [
        { syntax: "[Link text](URL)", description: "Link" },
        { syntax: "![Alt text](image-url)", description: "Image" }
      ]
    },
    {
      category: "Code Blocks",
      examples: [
        { syntax: "```javascript\ncode here\n```", description: "Code block with syntax highlighting" }
      ]
    },
    {
      category: "Other",
      examples: [
        { syntax: "> Quote text", description: "Blockquote" },
        { syntax: "---", description: "Horizontal rule" },
        { syntax: "| Col1 | Col2 |\n|------|------|\n| Data | Data |", description: "Table" }
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="bg-base-200 px-4 py-2 border-b border-base-300">
        <h3 className="text-sm font-medium text-base-content">Markdown Cheatsheet</h3>
      </div>
      <div className="flex-1 p-4 overflow-auto bg-base-100">
        <div className="space-y-4">
          {syntaxExamples.map((section, index) => (
            <div key={index} className="collapse collapse-arrow bg-base-200">
              <input type="checkbox" defaultChecked={index === 0} />
              <div className="collapse-title text-sm font-medium">
                {section.category}
              </div>
              <div className="collapse-content">
                <div className="space-y-2">
                  {section.examples.map((example, i) => (
                    <div key={i} className="bg-base-100 p-3 rounded">
                      <div className="text-xs text-base-content/70 mb-1">
                        {example.description}
                      </div>
                      <code className="text-xs font-mono bg-base-300 px-2 py-1 rounded block whitespace-pre-wrap">
                        {example.syntax}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cheatsheet;
