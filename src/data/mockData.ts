import { Product } from '../store/slices/productSlice';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Earbuds',
    description: 'Experience crystal-clear sound with our premium wireless earbuds. Featuring active noise cancellation, 24-hour battery life, and a comfortable fit.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electronics',
    subcategory: 'Audio',
    rating: 4.8,
    reviewCount: 243,
    stock: 45,
    brand: 'SoundMaster',
    featured: true
  },
  {
    id: '2',
    name: 'Ultra-Thin Smart Watch',
    description: 'Stay connected with our ultra-thin smart watch. Track your fitness, receive notifications, and monitor your heart rate with this sleek wearable device.',
    price: 199.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electronics',
    subcategory: 'Wearables',
    rating: 4.5,
    reviewCount: 187,
    stock: 32,
    brand: 'TechFit',
    featured: true
  },
  {
    id: '3',
    name: 'Professional Camera Kit',
    description: 'Capture life\'s moments with exceptional clarity using our professional camera kit. Includes a high-resolution DSLR camera, two lenses, and a sturdy tripod.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1051076/pexels-photo-1051076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electronics',
    subcategory: 'Cameras',
    rating: 4.9,
    reviewCount: 112,
    stock: 18,
    brand: 'OpticsElite',
    featured: false
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Work in comfort with our ergonomic office chair. Designed to provide optimal support for your back and neck during long work sessions.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/116915/pexels-photo-116915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Furniture',
    subcategory: 'Office',
    rating: 4.7,
    reviewCount: 320,
    stock: 24,
    brand: 'ComfortPlus',
    featured: true
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    description: 'Illuminate your workspace with our minimalist desk lamp. Features adjustable brightness levels and a sleek design that complements any decor.',
    price: 69.99,
    image: 'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4993076/pexels-photo-4993076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Home',
    subcategory: 'Lighting',
    rating: 4.5,
    reviewCount: 98,
    stock: 50,
    brand: 'ModernHome',
    featured: false
  },
  {
    id: '6',
    name: 'Premium Coffee Maker',
    description: 'Start your day right with our premium coffee maker. Programmable settings allow you to brew the perfect cup of coffee every time.',
    price: 129.99,
    image: 'https://images.pexels.com/photos/6313085/pexels-photo-6313085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/6313085/pexels-photo-6313085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Kitchen',
    subcategory: 'Appliances',
    rating: 4.7,
    reviewCount: 156,
    stock: 38,
    brand: 'BrewMaster',
    featured: true
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Eliminate cable clutter with our wireless charging pad. Compatible with all Qi-enabled devices for fast and convenient charging.',
    price: 39.99,
    image: 'https://images.pexels.com/photos/8533741/pexels-photo-8533741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/8533741/pexels-photo-8533741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6498984/pexels-photo-6498984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3661197/pexels-photo-3661197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electronics',
    subcategory: 'Accessories',
    rating: 4.4,
    reviewCount: 208,
    stock: 65,
    brand: 'PowerTech',
    featured: false
  },
  {
    id: '8',
    name: 'Lightweight Hiking Backpack',
    description: 'Adventure awaits with our lightweight hiking backpack. Featuring multiple compartments, water resistance, and ergonomic design for comfort on long trails.',
    price: 89.99,
    image: 'https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/2166456/pexels-photo-2166456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6152391/pexels-photo-6152391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1178768/pexels-photo-1178768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Outdoor',
    subcategory: 'Backpacks',
    rating: 4.6,
    reviewCount: 145,
    stock: 28,
    brand: 'TrailBlaze',
    featured: true
  },
  {
    id: '9',
    name: 'Premium Yoga Mat',
    description: 'Enhance your yoga practice with our premium yoga mat. Non-slip surface and cushioned support for comfort during all types of yoga.',
    price: 59.99,
    image: 'https://images.pexels.com/photos/6740294/pexels-photo-6740294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/6740294/pexels-photo-6740294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4056725/pexels-photo-4056725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Fitness',
    subcategory: 'Yoga',
    rating: 4.8,
    reviewCount: 176,
    stock: 42,
    brand: 'ZenFlex',
    featured: false
  },
  {
    id: '10',
    name: 'Gourmet Cooking Set',
    description: 'Cook like a professional chef with our gourmet cooking set. Includes stainless steel pots and pans with non-stick coating for easy cooking and cleaning.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/4252137/pexels-photo-4252137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/10286242/pexels-photo-10286242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/6996328/pexels-photo-6996328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Kitchen',
    subcategory: 'Cookware',
    rating: 4.9,
    reviewCount: 94,
    stock: 22,
    brand: 'ChefElite',
    featured: true
  },
  {
    id: '11',
    name: 'Bluetooth Speaker',
    description: 'Take your music anywhere with our portable Bluetooth speaker. Waterproof design, 12-hour battery life, and impressive sound quality in a compact package.',
    price: 79.99,
    image: 'https://images.pexels.com/photos/575729/pexels-photo-575729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/575729/pexels-photo-575729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/9034462/pexels-photo-9034462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/8963179/pexels-photo-8963179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Electronics',
    subcategory: 'Audio',
    rating: 4.5,
    reviewCount: 231,
    stock: 53,
    brand: 'SoundMaster',
    featured: false
  },
  {
    id: '12',
    name: 'Smart Home Hub',
    description: 'Control your entire home with our smart home hub. Compatible with major smart home devices for seamless integration and automation.',
    price: 149.99,
    image: 'https://images.pexels.com/photos/4516260/pexels-photo-4516260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
      'https://images.pexels.com/photos/4516260/pexels-photo-4516260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1034808/pexels-photo-1034808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/7054761/pexels-photo-7054761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    category: 'Smart Home',
    subcategory: 'Hubs',
    rating: 4.7,
    reviewCount: 87,
    stock: 31,
    brand: 'HomeIQ',
    featured: true
  }
];