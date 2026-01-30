# Contributing Guide

## Development Workflow

### 1. Making Changes

```bash
# Create a new branch for your feature
 git checkout -b feature/my-new-feature

# Make your changes to the code
# ... edit files ...

# Test your changes
 npm run test:run
 npm run build

# Commit your changes
 git add .
 git commit -m "Add: description of what you changed"

# Push to GitHub
 git push origin feature/my-new-feature
```

### 2. Creating a Pull Request

1. Go to GitHub.com → Your repository
2. Click "Pull Requests" tab
3. Click "New Pull Request"
4. Select your branch
5. Add description of changes
6. Click "Create Pull Request"
7. GitHub Actions will automatically run tests
8. Once tests pass, click "Merge"

### 3. Automated Checks

Every Pull Request will:
- ✅ Run all 32 tests
- ✅ Check code quality with ESLint
- ✅ Verify build succeeds
- ✅ Block merge if any checks fail

## Code Standards

### Before Committing

```bash
# Format your code
 npm run format

# Check for linting issues
 npm run lint

# Run tests
 npm run test:run

# Build to ensure no errors
 npm run build
```

### Commit Message Format

- `Add: new feature description`
- `Fix: bug description`
- `Update: what changed`
- `Refactor: what was refactored`
- `Docs: documentation changes`

## Branch Strategy

- `main` - Production-ready code (protected)
- `feature/*` - New features
- `fix/*` - Bug fixes
- `update/*` - Updates and improvements

Never commit directly to `main` - always use Pull Requests!
