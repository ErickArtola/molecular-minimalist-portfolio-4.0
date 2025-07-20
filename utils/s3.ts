/**
 * Utility functions for working with S3 URLs
 */

/**
 * Constructs an S3 URL for a given bucket, region, and key
 */
export function getS3Url(bucket: string, region: string, key: string): string {
  return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
}

/**
 * Checks if a URL is an S3 URL
 */
export function isS3Url(url: string): boolean {
  return /^https?:\/\/[^\/]+\.s3\.[^\/]+\.amazonaws\.com\//.test(url);
}

/**
 * Extracts bucket, region, and key from an S3 URL
 */
export function parseS3Url(url: string): { bucket: string; region: string; key: string } | null {
  const match = url.match(/^https?:\/\/([^\/]+)\.s3\.([^\/]+)\.amazonaws\.com\/(.+)$/);
  if (!match || !match[1] || !match[2] || !match[3]) return null;
  
  return {
    bucket: match[1],
    region: match[2],
    key: match[3]
  };
}

/**
 * Gets the file extension from a URL
 */
export function getFileExtension(url: string): string {
  const parts = url.split('.');
  return parts.length > 1 ? (parts[parts.length - 1] || '').toLowerCase() : '';
}

/**
 * Checks if a URL points to a video file based on its extension
 */
export function isVideoUrl(url: string): boolean {
  const extension = getFileExtension(url);
  return ['mp4', 'webm', 'ogg', 'mov'].includes(extension);
}

/**
 * Checks if a URL points to an audio file based on its extension
 */
export function isAudioUrl(url: string): boolean {
  const extension = getFileExtension(url);
  return ['mp3', 'wav', 'ogg', 'aac'].includes(extension);
}