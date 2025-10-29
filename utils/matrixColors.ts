// Helper functions for MatrixView color coding

/**
 * Returns a Tailwind CSS text color class based on the notification timeline.
 * Shorter timelines are more "urgent" and colored red.
 * Longer timelines are less "urgent" and colored green.
 * "Not Specified" is treated as the lowest priority and colored gray.
 * @param days - The number of days in the timeline. <=0 is treated as lowest priority.
 */
export const getTimelineColor = (days: number | null): string => {
  if (days === null) return 'text-gray-400';
  if (days <= 0) return 'text-gray-500'; // ASAP / Concurrent / Not Specified
  if (days <= 15) return 'text-red-600';
  if (days <= 30) return 'text-orange-600';
  if (days <= 45) return 'text-gray-600';
  return 'text-gray-700';
};

/**
 * Returns a Tailwind CSS text color class based on the notification threshold.
 * Lower thresholds are stricter and colored red.
 * Higher thresholds are more lenient and colored green.
 * @param threshold - The number of individuals for the threshold.
 */
export const getThresholdColor = (threshold: number | null): string => {
  if (threshold === null) return 'text-gray-400';
  if (threshold <= 1) return 'text-red-700'; // Strictest
  if (threshold <= 500) return 'text-red-600';
  if (threshold <= 1000) return 'text-orange-600';
  return 'text-gray-700';
};

/**
 * Returns a Tailwind CSS text color class for boolean values.
 * 'Yes' is typically color-coded to indicate a more significant requirement or risk.
 * @param value - The boolean value.
 */
export const getBooleanColor = (value: boolean): string => {
  return value ? 'text-red-600' : 'text-gray-700';
};