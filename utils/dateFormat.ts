/**
 * Utility functions for formatting dates in a user-friendly way
 */

/**
 * Formats an ISO date string to a readable format
 * @param isoDate - ISO 8601 date string
 * @returns Formatted date string (e.g., "Jan 15, 2024, 10:30 AM")
 */
export const formatDate = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  } catch (e) {
    return isoDate; // Fallback to original string if parsing fails
  }
};

/**
 * Formats an ISO date string as relative time (e.g., "2 hours ago")
 * @param isoDate - ISO 8601 date string
 * @returns Relative time string
 */
export const formatRelativeTime = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} minute${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    return formatDate(isoDate);
  } catch (e) {
    return isoDate; // Fallback to original string if parsing fails
  }
};

/**
 * Formats a date for display without time
 * @param isoDate - ISO 8601 date string
 * @returns Formatted date string (e.g., "January 15, 2024")
 */
export const formatDateOnly = (isoDate: string): string => {
  try {
    const date = new Date(isoDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (e) {
    return isoDate;
  }
};
