import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownViewer.css';

function MarkdownViewer({ filename }) {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Reset states and early return if no filename
    if (!filename) {
      return;
    }

    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setError(null);
    setContent('');

    fetch(`/content/${filename}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load markdown file');
        }
        return response.text();
      })
      .then(text => {
        if (!cancelled) {
          setContent(text);
          setIsLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [filename]);

  if (isLoading) {
    return <div className="markdown-viewer loading">Loading...</div>;
  }

  if (error) {
    return <div className="markdown-viewer error">Error: {error}</div>;
  }

  if (!filename) {
    return (
      <div className="markdown-viewer welcome">
        <h1>Welcome to Panner</h1>
        <p>Select a document from the sidebar to begin reading.</p>
      </div>
    );
  }

  return (
    <article className="markdown-viewer">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

export default MarkdownViewer;
