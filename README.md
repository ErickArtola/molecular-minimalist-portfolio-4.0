# Molecular Minimalist Portfolio

This project is a Next.js based portfolio showcasing AI, ML, and genomics work.

## Prerequisites

- **Node.js** version 18 or later

## Setup

Install dependencies:

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

## Media Hosting

This project uses Amazon S3 for hosting media files (videos and audio). To use your own S3 bucket:

1. Create an S3 bucket in your AWS account
2. Configure the bucket for public access (for media files that should be publicly accessible)
3. Configure CORS settings for your bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": ["ETag", "Content-Length", "Content-Type"],
    "MaxAgeSeconds": 3000
  }
]
```

4. Set a bucket policy to allow public read access:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadForGetBucketObjects",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

5. Upload your media files to the bucket
6. Copy `.env.example` to `.env.local` and update the S3 configuration variables:

```
NEXT_PUBLIC_S3_BUCKET_NAME=your-bucket-name
NEXT_PUBLIC_S3_REGION=your-region
NEXT_PUBLIC_S3_BASE_URL=https://your-bucket-name.s3.your-region.amazonaws.com
```

7. Use the S3 URL directly in your code:

```typescript
const videoUrl = "https://your-bucket-name.s3.your-region.amazonaws.com/videos/your-video.mp4";
```

## Optional Commands

- Lint the project:

```bash
npm run lint
```

- Type check the project:

```bash
npm run type-check
```
