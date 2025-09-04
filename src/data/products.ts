import { Product } from '@/types/product';
import heroSaree from '@/assets/hero-saree.jpg';
import saree1 from '@/assets/saree-1.jpg';
import saree2 from '@/assets/saree-2.jpg';
import saree3 from '@/assets/saree-3.jpg';
import saree4 from '@/assets/saree-4.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Purple Silk Saree',
    slug: 'royal-purple-silk-saree',
    price: 12500,
    originalPrice: 15000,
    description: 'Exquisite royal purple silk saree with intricate gold embroidery and traditional paisley patterns. Perfect for weddings and special occasions.',
    images: [heroSaree],
    category: 'Silk Sarees',
    material: 'Pure Silk',
    colors: ['Purple', 'Gold'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Emerald Green Elegance',
    slug: 'emerald-green-elegance',
    price: 8500,
    originalPrice: 10000,
    description: 'Beautiful emerald green silk saree with gold border and delicate thread work. A timeless piece for any festive occasion.',
    images: [saree1],
    category: 'Silk Sarees',
    material: 'Pure Silk',
    colors: ['Green', 'Gold'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Crimson Royalty',
    slug: 'crimson-royalty',
    price: 15000,
    description: 'Stunning crimson red silk saree with heavy gold zari work and traditional motifs. A statement piece for grand celebrations.',
    images: [saree2],
    category: 'Designer Sarees',
    material: 'Pure Silk with Zari',
    colors: ['Red', 'Gold'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true
  },
  {
    id: '4',
    name: 'Navy Blue Contemporary',
    slug: 'navy-blue-contemporary',
    price: 6500,
    originalPrice: 8000,
    description: 'Modern navy blue silk saree with silver embellishments and contemporary design. Perfect blend of tradition and modernity.',
    images: [saree3],
    category: 'Contemporary Sarees',
    material: 'Silk Blend',
    colors: ['Navy Blue', 'Silver'],
    sizes: ['Free Size'],
    inStock: true
  },
  {
    id: '5',
    name: 'Golden Peacock Heritage',
    slug: 'golden-peacock-heritage',
    price: 18000,
    description: 'Luxurious golden yellow silk saree with intricate peacock motifs and heavy border work. A heritage piece for the discerning connoisseur.',
    images: [saree4],
    category: 'Heritage Collection',
    material: 'Pure Silk with Gold Thread',
    colors: ['Golden Yellow', 'Gold'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true
  }
];

