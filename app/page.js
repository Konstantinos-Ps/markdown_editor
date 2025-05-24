'use client';

import { useState } from 'react';
import Editor from '../components/Editor';
import Preview from '../components/Preview';
import Cheatsheet from '../components/Cheatsheet';
import Header from '../components/Header';
import { sampleMarkdown } from '../libs/Markdown';

export default function Home() {
  const [markdown, setMarkdown] = useState(sampleMarkdown);
  const [showCheatsheet, setShowCheatsheet] = useState(false);

  return (
    <div className="min-h-screen bg-base-100">
      <Header 
        showCheatsheet={showCheatsheet} 
        setShowCheatsheet={setShowCheatsheet}
        setMarkdown={setMarkdown}
        markdown={markdown}
      />

      {/* Main Content */}
      <div className="container mx-auto h-[calc(100vh-73px)] flex">
        {/* Editor and Preview */}
        <div className={`flex flex-1 ${showCheatsheet ? 'w-2/3' : 'w-full'}`}>
          {/* Editor */}
          <div className="w-1/2 border-r border-base-300">
            <Editor
              value={markdown}
              onChange={setMarkdown}
              placeholder="Start writing your markdown here..."
            />
          </div>
          
          {/* Preview */}
          <div className="w-1/2">
            <Preview markdown={markdown} />
          </div>
        </div>

        {/* Cheatsheet Sidebar */}
        {showCheatsheet && (
          <div className="w-1/3 border-l border-base-300">
            <Cheatsheet />
          </div>
        )}
      </div>
    </div>
  );
}
