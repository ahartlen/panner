import { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar({ onSelectDocument, selectedDocId }) {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/content/manifest.json')
      .then(response => response.json())
      .then(data => {
        setDocuments(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load manifest:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <aside className="sidebar">Loading documents...</aside>;
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Panner</h2>
        <p className="sidebar-subtitle">History of Gold Mining in Nova Scotia</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {documents.map(doc => (
            <li
              key={doc.id}
              className={selectedDocId === doc.id ? 'active' : ''}
              onClick={() => onSelectDocument(doc)}
            >
              <div className="doc-title">{doc.title}</div>
              <div className="doc-description">{doc.description}</div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
