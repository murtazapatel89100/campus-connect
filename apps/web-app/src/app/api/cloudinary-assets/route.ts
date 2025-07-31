import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('resource_type:image') // or use 'resource_type:video'
      .sort_by('created_at', 'desc')
      .max_results(30)
      .execute();

    return NextResponse.json({ assets: result.resources });
  } catch (error) {
    console.error('Cloudinary error:', error);
    return NextResponse.json({ error: 'Failed to fetch assets' }, { status: 500 });
  }
}
