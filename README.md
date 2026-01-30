# Data Breach Law Navigator

A comprehensive tool for analyzing, comparing, and understanding U.S. state data breach notification laws.

**Live Demo:** [Your URL Here]

## Features

- 🔍 **Search & Filter** - Search across all 52 U.S. jurisdictions
- 📊 **Matrix View** - Compare laws side-by-side in a sortable table
- 📋 **Assessment Wizard** - Calculate notification obligations for breach scenarios
- 📄 **Export Reports** - Generate professional PDF/HTML reports
- 💾 **Offline Support** - Works without internet after first load
- 🧪 **Well Tested** - 32 automated tests ensure reliability

## Quick Start

```bash
# Install dependencies
 npm install

# Start development server
 npm run dev

# Open http://localhost:5000
```

## Development Commands

```bash
# Run tests
 npm run test:run

# Check code quality
 npm run lint

# Format code
 npm run format

# Build for production
 npm run build
```

## Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS
- **Build Tool:** Vite
- **Testing:** Vitest, React Testing Library
- **Linting:** ESLint, Prettier
- **CI/CD:** GitHub Actions

## Architecture

### Data Flow
1. 52 state law files (Markdown + YAML) in `/raw-laws/`
2. Build-time parsing creates `public/laws.json`
3. App loads and indexes data for O(1) filtering
4. IndexedDB caching enables offline usage

### Key Components
- **StateSelector** - Sidebar with search and filters
- **MatrixView** - Comparison table with column customization
- **BreachAssessmentWizard** - Multi-step assessment flow
- **ExportService** - Report generation

## Testing

All core functions have automated tests:
- ✅ Data indexing and search
- ✅ Input validation
- ✅ Color coding utilities
- ✅ 32 total tests, all passing

Run tests: `npm run test:run`

## Deployment

### Automatic (Recommended)
Push to `main` branch → GitHub Actions runs tests → Auto-deploys

### Manual
```bash
 npm run build
# Upload `dist/` folder to your hosting provider
```

## Project Structure

```
├── components/           - React components
├── services/            - Business logic (data, export, assessment)
├── utils/               - Helper functions
├── tests/               - Automated tests
├── raw-laws/            - Source law files (52 states)
├── scripts/             - Build scripts
├── .github/workflows/   - CI/CD configuration
└── dist/                - Production build (generated)
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development workflow.

## License

[Your License Here]

## Acknowledgments

Built with modern web technologies and best practices for reliability and performance.
