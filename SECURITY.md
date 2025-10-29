# Security Notes

## Known Dependency Vulnerabilities

### Development Dependencies

#### esbuild <=0.24.2 (via Vite 5.4.21)
- **Severity:** Moderate
- **CVE:** Not yet assigned
- **Description:** esbuild enables any website to send requests to the development server and read the response
- **Affected Version:** esbuild <=0.24.2, which is a dependency of Vite 5.4.21
- **Impact:** Development-only vulnerability. Does NOT affect production builds.
- **Risk Assessment:**
  - **Production:** No risk - the vulnerability only affects the development server
  - **Development (single developer):** Low risk
  - **Development (team environment):** Medium risk - if development server is exposed on a network

**Mitigation Options:**

1. **Accept the risk** (Recommended for solo development)
   - The vulnerability only affects `npm run dev` when the development server is running
   - Production builds (`npm run build`) are NOT affected
   - Risk is minimal if development server is only accessible on localhost

2. **Upgrade to Vite 7.x** (Breaking changes)
   ```bash
   npm audit fix --force
   ```
   - This will upgrade Vite to v7.x which includes a patched version of esbuild
   - **Warning:** This is a major version upgrade and may introduce breaking changes
   - Test thoroughly after upgrading

3. **Network isolation** (For team environments)
   - Ensure development servers are not accessible from untrusted networks
   - Use firewall rules to restrict access to localhost only
   - Use VPNs for remote development access

**Tracking:**
- Monitor for Vite updates that include the patched esbuild version
- Check `npm audit` output regularly for security updates

## Security Best Practices

### API Key Management
- The Gemini API key is configured via environment variables (`GEMINI_API_KEY`)
- **Never** commit `.env.local` to version control
- The `.gitignore` file should include `.env.local` (verify this)

### Data Storage
- Assessment data is stored in browser localStorage
- localStorage data is accessible to JavaScript on the same origin
- No sensitive data (e.g., actual breach data, PII) should be stored in assessments
- Consider adding a data retention policy for saved assessments

### Input Validation
- All user inputs in AssessmentStep1 are validated (min: 1, max: 1 billion)
- Search terms are sanitized to prevent XSS attacks (see utils/searchHighlight.ts)
- localStorage quota is monitored to prevent storage exhaustion

### XSS Protection
- All user-generated content is sanitized before rendering
- `dangerouslySetInnerHTML` is only used with sanitized content
- HTML escaping is performed via `escapeHtml()` utility function

## Reporting Security Issues

If you discover a security vulnerability in this application, please report it by:
1. Creating a private security advisory in the GitHub repository
2. Emailing the maintainers directly (if available)

**Do not** create public GitHub issues for security vulnerabilities.

## Security Changelog

### 2025-01-XX - Security Improvements
- Added XSS protection for search snippet rendering
- Implemented HTML sanitization in utils/searchHighlight.ts
- Added input validation for assessment affected counts
- Improved localStorage error handling to prevent quota exhaustion
- Added ErrorBoundary components to prevent information disclosure via error messages

### Previous
- Initial security review completed
- Documented dependency vulnerabilities
