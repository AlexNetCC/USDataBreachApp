import { describe, it, expect } from 'vitest';
import { escapeHtml, highlightSearchTerm } from '../utils/searchHighlight';

describe('searchHighlight', () => {
  describe('escapeHtml', () => {
    it('should escape HTML special characters', () => {
      expect(escapeHtml('<script>alert("test")</script>')).toBe(
        '&lt;script&gt;alert(&quot;test&quot;)&lt;/script&gt;'
      );
    });

    it('should escape ampersands', () => {
      expect(escapeHtml('A & B')).toBe('A &amp; B');
    });

    it('should escape single quotes', () => {
      expect(escapeHtml("it's a test")).toBe('it&#039;s a test');
    });

    it('should handle empty strings', () => {
      expect(escapeHtml('')).toBe('');
    });

    it('should handle text without special characters', () => {
      expect(escapeHtml('Hello World')).toBe('Hello World');
    });
  });

  describe('highlightSearchTerm', () => {
    it('should highlight matching terms', () => {
      const result = highlightSearchTerm('California data breach law', 'data');
      expect(result).toContain('<mark');
      expect(result).toContain('data</mark>');
      expect(result).toContain('bg-accent/20');
    });

    it('should handle case-insensitive matching', () => {
      const result = highlightSearchTerm('CALIFORNIA law', 'california');
      expect(result).toContain('CALIFORNIA</mark>');
    });

    it('should escape HTML before highlighting', () => {
      const result = highlightSearchTerm('<script>test</script>', 'test');
      expect(result).toContain('&lt;script&gt;');
      expect(result).not.toContain('<script>');
      expect(result).toContain('<mark class="bg-accent/20');
      expect(result).toContain('>test</mark>');
    });

    it('should handle empty search term', () => {
      const result = highlightSearchTerm('California law', '');
      expect(result).toBe('California law');
      expect(result).not.toContain('<mark>');
    });

    it('should handle whitespace-only search term', () => {
      const result = highlightSearchTerm('California law', '   ');
      expect(result).toBe('California law');
    });

    it('should escape regex special characters in search term', () => {
      const result = highlightSearchTerm('Price: $100.00', '$100');
      expect(result).toContain('<mark class="bg-accent/20');
      expect(result).toContain('>$100</mark>');
    });

    it('should handle multiple matches', () => {
      const result = highlightSearchTerm('data breach data law', 'data');
      const matches = result.match(/<mark/g);
      expect(matches?.length).toBe(2);
    });

    it('should handle no matches', () => {
      const result = highlightSearchTerm('California law', 'Texas');
      expect(result).toBe('California law');
      expect(result).not.toContain('<mark>');
    });
  });
});
