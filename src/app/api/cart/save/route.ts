import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/libs/db';
import { getToken } from 'next-auth/jwt';

export async function POST(req: NextRequest) {
  const token: any = await getToken({ req });

  if (!token) {
    return NextResponse.json('User is unauthorized', { status: 401 });
  }

  try {
    const { productId, quantity } = await req.json();

    if (quantity === 0) {
      // Remove the product from the cart if quantity is 0
      await prisma.cartItem.deleteMany({
        where: {
          userId: token.id,
          productId,
        },
      });
      return NextResponse.json({ success: true, message: 'Product removed from cart' }, { status: 200 });
    }

    // Check if the product already exists in the cart
    const existingCartItem = await prisma.cartItem.findFirst({
      where: {
        userId: token.id,
        productId,
      },
    });

    if (quantity === -10) {
      if (existingCartItem) {
        // Toggle the checked status of the existing cart item
        const updatedCartItem = await prisma.cartItem.update({
          where: {
            id: existingCartItem.id,
          },
          data: {
            checked: !existingCartItem.checked,
          },
        });
        return NextResponse.json({ success: true, item: updatedCartItem }, { status: 200 });
      } else {
        return NextResponse.json({ success: false, message: 'Product not found in cart' }, { status: 404 });
      }
    }

    if (existingCartItem) {
      // Calculate the new quantity
      const newQuantity = existingCartItem.quantity + quantity;
      if (newQuantity <= 0) {
        // Remove the product from the cart if the new quantity is 0 or less
        await prisma.cartItem.delete({
          where: {
            id: existingCartItem.id,
          },
        });
        return NextResponse.json({ success: true, message: 'Product removed from cart' }, { status: 200 });
      } else {
        // Update the quantity of the existing product
        const updatedCartItem = await prisma.cartItem.update({
          where: {
            id: existingCartItem.id,
          },
          data: {
            quantity: newQuantity,
          },
        });

        return NextResponse.json({ success: true, item: updatedCartItem }, { status: 200 });
      }
    } else {
      // Create a new cart item
      const createProduct = await prisma.cartItem.create({
        data: {
          userId: token.id,
          productId,
          quantity,
        },
      });

      return NextResponse.json({ success: true, item: createProduct }, { status: 200 });
    }
  } catch (error) {
    console.error('Failed to save product in cart', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
