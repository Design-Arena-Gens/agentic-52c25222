import { NextResponse } from 'next/server';

let furniture = [
  {
    id: '1',
    name: 'Modern Sofa',
    description: 'Elegant 3-seater sofa with premium fabric upholstery',
    price: 1299,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
    inStock: true
  },
  {
    id: '2',
    name: 'Scandinavian Dining Table',
    description: 'Minimalist wooden dining table for 6 people',
    price: 899,
    category: 'Dining Room',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop',
    inStock: true
  },
  {
    id: '3',
    name: 'King Size Bed Frame',
    description: 'Luxurious upholstered bed frame with storage',
    price: 1599,
    category: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
    inStock: true
  },
  {
    id: '4',
    name: 'Ergonomic Office Chair',
    description: 'Premium mesh back office chair with lumbar support',
    price: 449,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=600&fit=crop',
    inStock: true
  },
  {
    id: '5',
    name: 'Coffee Table',
    description: 'Contemporary glass-top coffee table',
    price: 349,
    category: 'Living Room',
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&h=600&fit=crop',
    inStock: true
  },
  {
    id: '6',
    name: 'Bookshelf',
    description: 'Modern open bookshelf with 5 shelves',
    price: 279,
    category: 'Office',
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&h=600&fit=crop',
    inStock: true
  }
];

export async function GET() {
  return NextResponse.json(furniture);
}

export async function POST(request: Request) {
  const body = await request.json();
  const newItem = {
    id: Date.now().toString(),
    ...body
  };
  furniture.push(newItem);
  return NextResponse.json(newItem);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  furniture = furniture.filter(item => item.id !== id);
  return NextResponse.json({ success: true });
}

export async function PUT(request: Request) {
  const body = await request.json();
  const index = furniture.findIndex(item => item.id === body.id);
  if (index !== -1) {
    furniture[index] = { ...furniture[index], ...body };
    return NextResponse.json(furniture[index]);
  }
  return NextResponse.json({ error: 'Not found' }, { status: 404 });
}
