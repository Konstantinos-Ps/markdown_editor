const WordCounter = ({ markdown }) => {
    // Calculate stats
    const wordCount = markdown.trim() ? markdown.split(/\s+/).length : 0;
    const charCount = markdown.length;
    const readingTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute

    return (
        <div className="flex items-center gap-3 text-sm text-base-content/80 bg-base-200/50 rounded-lg px-3 py-1">
            <div className="tooltip tooltip-bottom" data-tip="Word count">
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {wordCount}
                </span>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Character count">
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {charCount}
                </span>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Reading time (minutes)">
                <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readingTime}
                </span>
            </div>
        </div>
    );
};

export default WordCounter;