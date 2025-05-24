import { parseMarkdown } from '../libs/Markdown';

const Preview = ({ markdown }) => {
  const htmlContent = parseMarkdown(markdown);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-base-200 px-4 py-2 border-b border-base-300">
        <h3 className="text-sm font-medium text-base-content">Preview</h3>
      </div>
      <div 
        className="flex-1 p-4 overflow-auto bg-base-100 prose prose-sm max-w-none prose-pre:bg-base-200 prose-pre:text-base-content prose-code:text-accent prose-headings:text-base-content prose-p:text-base-content prose-li:text-base-content prose-strong:text-base-content prose-em:text-base-content prose-blockquote:text-base-content prose-blockquote:border-accent prose-th:text-base-content prose-td:text-base-content prose-a:text-primary hover:prose-a:text-primary-focus"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Preview;
