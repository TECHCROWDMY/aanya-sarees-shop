import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Purple Silk Saree',
    slug: 'royal-purple-silk-saree',
    price: 12500,
    originalPrice: 15000,
    description: 'Exquisite royal purple silk saree with intricate gold embroidery and traditional paisley patterns. Perfect for weddings and special occasions.',
    images: ['/assets/hero-saree.jpg', '/assets/saree-1.jpg', '/assets/saree-2.jpg'],
    category: 'Silk Sarees',
    material: 'Pure Silk',
    colors: ['Purple', 'Gold', 'Maroon'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true,
    company: 'Elegant Sarees Co.',
    reviews: [
      {
        id: '1',
        customerName: 'Priya Sharma',
        rating: 5,
        comment: 'Absolutely stunning saree! The quality is exceptional and the embroidery work is beautiful.',
        date: '2024-01-15'
      },
      {
        id: '2',
        customerName: 'Meera Patel',
        rating: 4,
        comment: 'Beautiful saree, great for special occasions. Fast delivery too!',
        date: '2024-01-10'
      }
    ]
  },
  {
    id: '2',
    name: 'Emerald Green Elegance',
    slug: 'emerald-green-elegance',
    price: 8500,
    originalPrice: 10000,
    description: 'Beautiful emerald green silk saree with gold border and delicate thread work. A timeless piece for any festive occasion.',
    images: ['/assets/saree-1.jpg', '/assets/saree-3.jpg', '/assets/hero-saree.jpg'],
    category: 'Silk Sarees',
    material: 'Pure Silk',
    colors: ['Green', 'Gold', 'Teal'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true,
    company: 'Royal Silk House',
    reviews: [
      {
        id: '3',
        customerName: 'Anjali Singh',
        rating: 5,
        comment: 'Love the color and quality. Perfect for my sister\'s wedding!',
        date: '2024-01-20'
      }
    ]
  },
  {
    id: '3',
    name: 'Crimson Royalty',
    slug: 'crimson-royalty',
    price: 15000,
    description: 'Stunning crimson red silk saree with heavy gold zari work and traditional motifs. A statement piece for grand celebrations.',
    images: ['/assets/saree-2.jpg', '/assets/saree-4.jpg', '/assets/hero-saree.jpg'],
    category: 'Designer Sarees',
    material: 'Pure Silk with Zari',
    colors: ['Red', 'Gold', 'Burgundy'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true,
    company: 'Heritage Designs',
    reviews: [
      {
        id: '4',
        customerName: 'Kavya Reddy',
        rating: 5,
        comment: 'Exceptional quality and design. Worth every penny!',
        date: '2024-01-25'
      },
      {
        id: '5',
        customerName: 'Rina Gupta',
        rating: 4,
        comment: 'Beautiful saree, impressed with the zari work.',
        date: '2024-01-18'
      }
    ]
  },
  {
    id: '4',
    name: 'Navy Blue Contemporary',
    slug: 'navy-blue-contemporary',
    price: 6500,
    originalPrice: 8000,
    description: 'Modern navy blue silk saree with silver embellishments and contemporary design. Perfect blend of tradition and modernity.',
    images: ['/assets/saree-3.jpg', '/assets/saree-1.jpg', '/assets/saree-2.jpg'],
    category: 'Contemporary Sarees',
    material: 'Silk Blend',
    colors: ['Navy Blue', 'Silver', 'Royal Blue'],
    sizes: ['Free Size'],
    inStock: true,
    company: 'Modern Traditions',
    reviews: [
      {
        id: '6',
        customerName: 'Nisha Jain',
        rating: 4,
        comment: 'Great contemporary design, very comfortable to wear.',
        date: '2024-01-22'
      }
    ]
  },
  {
    id: '5',
    name: 'Golden Peacock Heritage',
    slug: 'golden-peacock-heritage',
    price: 18000,
    description: 'Luxurious golden yellow silk saree with intricate peacock motifs and heavy border work. A heritage piece for the discerning connoisseur.',
    images: ['/assets/saree-4.jpg', '/assets/hero-saree.jpg', '/assets/saree-3.jpg'],
    category: 'Heritage Collection',
    material: 'Pure Silk with Gold Thread',
    colors: ['Golden Yellow', 'Gold', 'Amber'],
    sizes: ['Free Size'],
    inStock: true,
    featured: true,
    company: 'Peacock Sarees Ltd.',
    reviews: [
      {
        id: '7',
        customerName: 'Deepika Iyer',
        rating: 5,
        comment: 'Absolutely gorgeous! The peacock motifs are stunning.',
        date: '2024-01-28'
      },
      {
        id: '8',
        customerName: 'Shalini Das',
        rating: 5,
        comment: 'Premium quality saree, exceeded my expectations!',
        date: '2024-01-12'
      }
    ]
  }
];

