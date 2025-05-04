/**
 * Format a date to a human-readable string
 * 
 * @param date - Date to format
 * @returns Formatted date string (e.g. "March 12, 2023")
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Calculate reading time based on word count
 * 
 * @param content - Content to calculate reading time for
 * @returns Estimated reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes);
} 