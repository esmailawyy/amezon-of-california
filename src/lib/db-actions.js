import connectToDatabase from './mongodb';
import Product from '@/models/Product';
import staticProducts from '@/data/products';

export async function getDbProducts() {
  try {
    await connectToDatabase();
    let dbProducts = await Product.find({}).sort({ createdAt: -1 });

    if (dbProducts.length === 0) {
      console.log("Seeding database with static products...");
      await Product.insertMany(staticProducts);
      dbProducts = await Product.find({}).sort({ createdAt: -1 });
    }

    return JSON.parse(JSON.stringify(dbProducts)); // Serialize for client components if needed
  } catch (error) {
    console.error("Error fetching products from DB:", error);
    return [];
  }
}

export async function getDbProductById(id) {
  try {
    await connectToDatabase();
    const product = await Product.findById(id);
    return product ? JSON.parse(JSON.stringify(product)) : null;
  } catch (error) {
    console.error(`Error fetching product ${id} from DB:`, error);
    return null;
  }
}
