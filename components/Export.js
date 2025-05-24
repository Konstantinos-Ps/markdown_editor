import { parseMarkdown } from '../libs/Markdown';

const Export = ({ markdown }) => {
  const downloadFile = (content, filename, mimeType) => {
    const blob = new Blob([content], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const downloadMarkdown = () => {
    if (!markdown.trim()) {
      alert('Nothing to export! Please write some markdown first.');
      return;
    }
    downloadFile(markdown, 'document.md', 'text/markdown');
  };

  const downloadHTML = () => {
    if (!markdown.trim()) {
      alert('Nothing to export! Please write some markdown first.');
      return;
    }
    const htmlContent = parseMarkdown(markdown);
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Markdown</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; }
        pre { background: #f4f4f4; padding: 10px; border-radius: 5px; overflow-x: auto; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        blockquote { border-left: 4px solid #ddd; margin: 0; padding-left: 20px; color: #666; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        th { background: #f4f4f4; }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>`;
    downloadFile(fullHTML, 'document.html', 'text/html');
  };

  const copyToClipboard = async () => {
    if (!markdown.trim()) {
      alert('Nothing to copy! Please write some markdown first.');
      return;
    }
    try {
      await navigator.clipboard.writeText(markdown);
      alert('Markdown copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy to clipboard.');
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-sm btn-outline">
        Export
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-lg border border-base-300">
        <li>
          <button onClick={downloadMarkdown} className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download as .md
          </button>
        </li>
        <li>
          <button onClick={downloadHTML} className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download as .html
          </button>
        </li>
        <li>
          <button onClick={copyToClipboard} className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy to clipboard
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Export;
