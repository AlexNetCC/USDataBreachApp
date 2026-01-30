import { describe, it, expect } from 'vitest';
import { getTimelineColor, getThresholdColor, getBooleanColor } from '../utils/matrixColors';

describe('matrixColors', () => {
  describe('getTimelineColor', () => {
    it('should return gray for null', () => {
      expect(getTimelineColor(null)).toBe('text-gray-400');
    });

    it('should return gray for ASAP (0 or negative days)', () => {
      expect(getTimelineColor(0)).toBe('text-gray-500');
      expect(getTimelineColor(-1)).toBe('text-gray-500');
    });

    it('should return red for urgent timelines (15 days or less)', () => {
      expect(getTimelineColor(15)).toBe('text-red-600');
      expect(getTimelineColor(1)).toBe('text-red-600');
    });

    it('should return orange for moderate timelines (16-30 days)', () => {
      expect(getTimelineColor(16)).toBe('text-orange-600');
      expect(getTimelineColor(30)).toBe('text-orange-600');
    });

    it('should return gray for longer timelines (31-45 days)', () => {
      expect(getTimelineColor(31)).toBe('text-gray-600');
      expect(getTimelineColor(45)).toBe('text-gray-600');
    });

    it('should return dark gray for very long timelines (46+ days)', () => {
      expect(getTimelineColor(46)).toBe('text-gray-700');
      expect(getTimelineColor(100)).toBe('text-gray-700');
    });
  });

  describe('getThresholdColor', () => {
    it('should return gray for null', () => {
      expect(getThresholdColor(null)).toBe('text-gray-400');
    });

    it('should return dark red for strictest threshold (1 or less)', () => {
      expect(getThresholdColor(1)).toBe('text-red-700');
      expect(getThresholdColor(0)).toBe('text-red-700');
    });

    it('should return red for low thresholds (2-500)', () => {
      expect(getThresholdColor(2)).toBe('text-red-600');
      expect(getThresholdColor(500)).toBe('text-red-600');
    });

    it('should return orange for medium thresholds (501-1000)', () => {
      expect(getThresholdColor(501)).toBe('text-orange-600');
      expect(getThresholdColor(1000)).toBe('text-orange-600');
    });

    it('should return dark gray for high thresholds (1001+)', () => {
      expect(getThresholdColor(1001)).toBe('text-gray-700');
      expect(getThresholdColor(10000)).toBe('text-gray-700');
    });
  });

  describe('getBooleanColor', () => {
    it('should return red for true values', () => {
      expect(getBooleanColor(true)).toBe('text-red-600');
    });

    it('should return dark gray for false values', () => {
      expect(getBooleanColor(false)).toBe('text-gray-700');
    });
  });
});
