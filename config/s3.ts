/**
 * S3 configuration for media hosting
 */

export const S3_CONFIG = {
  // Your S3 bucket name
  BUCKET_NAME: process.env.NEXT_PUBLIC_S3_BUCKET_NAME || 'tears-are-data',
  
  // AWS region where your bucket is located
  REGION: process.env.NEXT_PUBLIC_S3_REGION || 'us-east-1',
  
  // Base URL for your S3 bucket
  BASE_URL: process.env.NEXT_PUBLIC_S3_BASE_URL || 'https://tears-are-data.s3.us-east-1.amazonaws.com',
  
  // Folders within your bucket
  FOLDERS: {
    VIDEOS: 'videos',
    AUDIO: 'audio',
    IMAGES: 'images'
  }
};

/**
 * Get a complete S3 URL for a file
 */
export function getS3FileUrl(folder: string, fileName: string): string {
  return `${S3_CONFIG.BASE_URL}/${folder}/${fileName}`;
}

/**
 * Get a video URL from S3
 */
export function getS3VideoUrl(fileName: string): string {
  return getS3FileUrl(S3_CONFIG.FOLDERS.VIDEOS, fileName);
}

/**
 * Get an audio URL from S3
 */
export function getS3AudioUrl(fileName: string): string {
  return getS3FileUrl(S3_CONFIG.FOLDERS.AUDIO, fileName);
}

/**
 * Get an image URL from S3
 */
export function getS3ImageUrl(fileName: string): string {
  return getS3FileUrl(S3_CONFIG.FOLDERS.IMAGES, fileName);
}