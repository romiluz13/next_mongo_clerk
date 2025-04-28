import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/lib/mongoose';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  await dbConnect();
  // Example: Replace with your own Mongoose model/query
  // const data = await YourModel.find({});

  return NextResponse.json({ message: 'You are authenticated with Clerk and connected to MongoDB!', userId });
} 