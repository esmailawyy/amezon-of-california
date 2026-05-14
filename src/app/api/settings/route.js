import { connectToDatabase } from '@/lib/mongodb';
import { NextResponse } from 'next/server';

// Simple Settings Schema/Model logic
const SETTINGS_COLLECTION = 'settings';

export async function GET() {
  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    let settings = await db.collection(SETTINGS_COLLECTION).findOne({ type: 'general' });
    
    if (!settings) {
      // Default settings
      settings = {
        type: 'general',
        storeName: 'Amezon of California',
        contactEmail: 'aamezonofcalifornian@gmail.com',
        phone: '+1 (909) 372-8995',
        address: '8255 Vineyard Ave, Rancho Cucamonga, CA 91730, USA',
        whatsapp: '19093728995',
        currency: 'USD',
        maintenanceMode: false
      };
      await db.collection(SETTINGS_COLLECTION).insertOne(settings);
    }
    
    return NextResponse.json(settings);
  } catch (error) {
    console.error("Settings GET Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const body = await request.json();
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    
    // Remove _id from body if it exists to avoid immutable field error
    const { _id, ...updateData } = body;
    
    const result = await db.collection(SETTINGS_COLLECTION).updateOne(
      { type: 'general' },
      { $set: updateData },
      { upsert: true }
    );
    
    return NextResponse.json({ message: 'Settings updated successfully', result });
  } catch (error) {
    console.error("Settings PUT Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
