/**
 * Utility functions for safely highlighting search terms in text
 * Prevents XSS vulnerabilities by escaping HTML before highlighting
 */

/**
 * Escapes HTML special characters to prevent XSS attacks
 */
export const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/**
 * Highlights search term in text while preventing XSS
 * @param text - The text to highlight in
 * @param searchTerm - The term to highlight
 * @returns HTML string with highlighted matches
 */
export const highlightSearchTerm = (text: string, searchTerm: string): string => {
  if (!searchTerm.trim()) return escapeHtml(text);

  const escaped = escapeHtml(text);
  const escapedTerm = searchTerm.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const regex = new RegExp(escapedTerm, 'gi');

  return escaped.replace(regex, (match) =>
    `<mark class="bg-accent/20 text-text-primary px-1 rounded">${match}</mark>`
  );
};
