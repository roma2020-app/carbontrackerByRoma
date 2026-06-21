# Contributing to CarbonTrackerByRoma

First off, thank you for taking the time to contribute! Support for personal carbon accounting and climate tech tools is highly valued.

Please review the guidelines below to ensure a smooth contribution process.

---

## 1. Code of Conduct

We expect all contributors to maintain a respectful, welcoming, and collaborative environment. Please report any harassment or inappropriate behavior to the project maintainers.

---

## 2. Coding Guidelines

To pass strict performance, security, and accessibility auditing, all code changes must comply with the following standards:

### 🎨 Vanilla Tech Stack
- The interface is built using native **HTML5**, **CSS3**, and vanilla **JavaScript**. Do not introduce external framework scripts (such as React, Vue, or Tailwind) unless explicitly aligned with the maintainers.

### 🔒 Security Auditing (XSS & Secrets)
- **Zero `innerHTML` Usage:** Never inject content using `element.innerHTML` or similar unsafe parsing directives. Always construct and modify nodes securely using:
  ```javascript
  const el = document.createElement("span");
  el.textContent = userInputString;
  parent.appendChild(el);
  ```
- **Input Validation:** All file uploads and drag-and-drop actions must validate size boundaries (max 5MB) and type constraints (JPEG, PNG, WebP).
- **Secrets Management:** Do not commit API credentials, client tokens, or private environment variables to frontend code assets.

### ♿ Accessibility (A11y)
- Keep the interface navigable for keyboard-only and screen-reader users.
- Ensure active navigation lists comply with **W3C Tablist & Tabpanel** rules (dynamic `aria-selected` and `tabindex="0"` for the selected tab, `tabindex="-1"` for inactive ones).
- Maintain outline focus indicators (`*:focus-visible`) for keyboard navigation compatibility.

### ⚡ Resource Efficiency
- Cache DOM element selectors outside recurring function loops.
- Avoid repeated calculations inside animation frames. For canvas render loops, utilize offscreen canvases (`bgCanvas`) to cache background grids, and use squared-distance metrics (`dx * dx + dy * dy`) rather than expensive `Math.sqrt` calls.

---

## 3. How to Submit Changes

1. **Fork and Branch:**
   Create a descriptive feature branch from `main`:
   ```bash
   git checkout -b feature/your-awesome-improvement
   ```
2. **Implement and Document:**
   - Document any new helper functions using explicit **JSDoc** annotation blocks.
   - If your changes modify calculation logic or DOM selectors, expand the assertions inside [test.js](file:///d:/RM/Project/AG/carbonChallenge/test.js).
3. **Verify and Validate:**
   Before committing, confirm that the files pass syntax and automated unit test executions:
   ```bash
   # Verify Javascript syntax
   node -c script.js
   
   # Run the unit test suite
   npm test
   ```
   *Note: Ensure all 14 tests pass successfully.*
4. **Submit Pull Request:**
   Submit your pull request (PR) with a clear summary of the changes made, the files modified, and verification results.
