import Export from './Export';

const Header = ({ showCheatsheet, setShowCheatsheet, setMarkdown, markdown }) => {
  return (
    <div className="bg-base-200 border-b border-base-300">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-base-content">Markdown Editor</h1>
        <div className="flex items-center gap-2">
          <Export markdown={markdown} />
          <button
            onClick={() => setShowCheatsheet(!showCheatsheet)}
            className={`btn btn-sm ${showCheatsheet ? 'btn-primary' : 'btn-outline'}`}
          >
            {showCheatsheet ? 'Hide' : 'Show'} Cheatsheet
          </button>
          <button
            onClick={() => setMarkdown('')}
            className="btn btn-sm btn-outline"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
