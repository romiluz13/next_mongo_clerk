/**
 * Example CRUD API for demonstration purposes only.
 * Safe to delete or extend for your own use case.
 * Not required for production use.
 */
import dbConnect from '@/lib/mongoose';
import ExampleItem from '@/models/ExampleItem';
import { NextResponse } from 'next/server';

// GET: List all items
export async function GET() {
  try {
    await dbConnect();
    const items = await ExampleItem.find();
    return NextResponse.json(items);
  } catch (error) {
    // If model is missing or deleted, return empty array (non-blocking)
    return NextResponse.json([]);
  }
}

// POST: Create a new item
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();
    const item = await ExampleItem.create(body);
    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    // If model is missing or deleted, return error but do not block app
    return NextResponse.json({ error: 'ExampleItem model not found or invalid data.' }, { status: 400 });
  }
} 