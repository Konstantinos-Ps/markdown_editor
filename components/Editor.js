const Editor = ({ value, onChange, placeholder = "Start writing your markdown..." }) => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-base-200 px-4 py-2 border-b border-base-300">
        <h3 className="text-sm font-medium text-base-content">Editor</h3>
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 w-full p-4 resize-none bg-base-100 text-base-content font-mono text-sm leading-relaxed focus:outline-none focus:ring-0 border-none"
        spellCheck={false}
      />
    </div>
  );
};

export default Editor;
