# Phase 1 Testing Checklist

**Test from your MacBook at:** `http://192.168.1.156:5000`

## Phase 1 Features to Test

### ✅ 1. MatrixView Dropdown Fix
**Location:** Matrix tab → "Customize Columns" button

**What to test:**
- [ ] Click "Matrix" tab
- [ ] Click "Customize Columns" button
- [ ] Verify dropdown opens and shows column checkboxes
- [ ] Check/uncheck columns to hide/show them
- [ ] Click outside dropdown to close it
- [ ] Verify columns actually show/hide in the table

**Expected:** Dropdown works smoothly, columns toggle correctly

---

### ✅ 2. ESLint + Prettier (Dev Only)
**Note:** This is for code quality, won't affect the running app

**What to test (optional):**
```bash
cd /home/alex/USDataBreachApp
npm run lint          # Should show 47 warnings (no errors)
npm run format -- --check  # Should show any formatting issues
```

**Expected:** Lint runs without crashing, identifies code quality issues

---

### ✅ 3. Unit Tests (Dev Only)
**What to test (optional):**
```bash
cd /home/alex/USDataBreachApp
npm run test:run      # Should show "32 passed"
```

**Expected:** All 32 tests pass in ~500ms

---

### ✅ 4. IndexedDB Fallback (Stress Test)
**Location:** Assessment tab

**What to test:**
- [ ] Click "Assessment" tab
- [ ] Add 10+ states with resident counts
- [ ] Fill in all assessment details
- [ ] Navigate away and back
- [ ] Verify data is still there

**Harder test (if you want):**
- [ ] Open browser DevTools → Application → Local Storage
- [ ] Right-click and "Clear" the localStorage
- [ ] Refresh the page
- [ ] Verify app still works (loads fresh, no errors)

**Expected:** Data persists across navigation, survives localStorage issues

---

### ✅ 5. Enhanced ErrorBoundary
**This is harder to test manually** (requires triggering an error)

**What was improved:**
- Old: Only "Reload Application" button
- New: "Try Again" + "Reload Application" buttons
- Try Again preserves your work
- Reload clears everything

**You can verify it exists:**
- [ ] Check that `components/ErrorBoundary.tsx` has both buttons
- [ ] Look for the helpful text: "Try Again preserves your current work"

---

### ✅ 6. Fixed Importmap Versions
**Location:** index.html (view source if curious)

**What changed:**
- Old: `react@^19.2.0` (could auto-update)
- New: `react@19.2.0` (exact version)

**What to test:**
- [ ] App loads normally
- [ ] No console errors about version mismatches

---

## Core Functionality Regression Test

Make sure we didn't break anything:

### Explorer Tab
- [ ] Search for states works (with 300ms debounce)
- [ ] Filters work (timeline, thresholds, booleans)
- [ ] Select multiple states for comparison
- [ ] State details display correctly

### Assessment Tab  
- [ ] Input validation works (red borders on invalid input)
- [ ] Can add states manually
- [ ] Can paste from spreadsheet
- [ ] Results calculate correctly

### Matrix Tab
- [ ] Table displays all 52 states
- [ ] Sorting works (click column headers)
- [ ] Column filters work
- [ ] **Customize Columns button works** ⭐ (Phase 1 fix)
- [ ] Export works

### General
- [ ] No console errors
- [ ] Responsive layout works
- [ ] Print/PDF export works

---

## Known Issues (Not Blockers)

1. **ESLint warnings** (47) - These are code style issues, not runtime bugs
2. **AssessmentCalendarView hooks warning** - Technical debt, doesn't affect users

---

## After Testing

If everything works:
1. ✅ **Phase 1 is verified!**
2. Ready for **Phase 2: Performance & Polish**

If you find issues:
- Note which checkbox failed
- Check browser console for errors (F12 → Console)
- Let me know what happened

---

**Estimated testing time:** 10-15 minutes

**Access URL:** http://192.168.1.156:5000
