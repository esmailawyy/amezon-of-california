import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this product.'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description.'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price.'],
  },
  originalPrice: {
    type: Number,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category.'],
    enum: ['tshirts', 'pants', 'shoes', 'hoodies', 'accessories'],
  },
  colors: [String],
  sizes: [String],
  image: {
    type: String,
    required: [true, 'Please provide an image URL.'],
  },
  images: [String],
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Number,
    default: 0,
  },
  badge: {
    type: String,
    default: null,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  trending: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
