import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Product from '@/models/Product';
import products from '@/data/products'; // Existing static data for seeding

export async function GET() {
  try {
    await connectToDatabase();
    const dbProducts = await Product.find({}).sort({ createdAt: -1 });

    // If database is empty, seed it with static data
    if (dbProducts.length === 0) {
      console.log("Seeding database with static products...");
      await Product.insertMany(products);
      const seededProducts = await Product.find({});
      return NextResponse.json(seededProducts);
    }

    return NextResponse.json(dbProducts);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    const data = await request.json();
    const newProduct = await Product.create(data);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Creation Error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 400 });
  }
}
