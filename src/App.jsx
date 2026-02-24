import { useState } from 'react'
import Sidebar from './Sidebar'
import MarkdownViewer from './MarkdownViewer'
import './App.css'

function App() {
  const [selectedDoc, setSelectedDoc] = useState(null)

  const handleSelectDocument = (doc) => {
    setSelectedDoc(doc)
  }

  return (
    <div className="app-container">
      <Sidebar 
        onSelectDocument={handleSelectDocument}
        selectedDocId={selectedDoc?.id}
      />
      <main className="main-content">
        <MarkdownViewer filename={selectedDoc?.filename} />
      </main>
    </div>
  )
}

export default App
