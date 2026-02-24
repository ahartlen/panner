# Panner

A React application for reading markdown documents about the history of gold mining in Nova Scotia.

## Features

- 📖 Clean, pleasant reading experience for markdown content
- 🎨 Responsive design with dark mode support  
- 🔍 Easy navigation between documents via sidebar
- ⚡ Fast rendering with React and Vite
- 📝 Support for GitHub Flavored Markdown (tables, task lists, etc.)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Adding New Content

To add new markdown documents:

1. Place your `.md` files in the `public/content/` directory
2. Update `public/content/manifest.json` with the new document metadata:

```json
{
  "id": "unique-id",
  "title": "Document Title",
  "filename": "your-file.md",
  "description": "Brief description"
}
```

## Project Structure

```
panner/
├── public/
│   └── content/          # Markdown content files
│       ├── manifest.json # Document metadata
│       └── *.md         # Markdown files
├── src/
│   ├── App.jsx          # Main app component
│   ├── Sidebar.jsx      # Navigation sidebar
│   ├── MarkdownViewer.jsx # Markdown renderer
│   └── *.css           # Component styles
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **react-markdown** - Markdown rendering
- **remark-gfm** - GitHub Flavored Markdown support

## License

MIT

