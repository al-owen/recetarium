import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  const id = parseInt(params.id);
  try {
    const meal = await prisma.meal.findFirst({
      where: {id: id},
    })
    if (!meal) {
      return new NextResponse("Meal not found", { status: 404 });
    }
    return new NextResponse(JSON.stringify(meal), { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500});
  }
}

export async function POST(request, { params }) {
  try {
    const id = parseInt(params.id);
    const data = await request.json();

    const result = await prisma.meal.update({
      where: {id: id},
      data: data
    })
    if (!result) {
      return new NextResponse("Meal not found", { status: 404 });
    }
    return NextResponse.json({ message: result}, { status: 200 });
    
  } catch (error) {
    return new NextResponse(error.message, { status: 500});
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = parseInt(params.id);
    const result = await prisma.meal.delete({
      where: {id: id},
    })
    return NextResponse.json({ message: result}, { status: 200 });
  } catch (error) {
    return new NextResponse(error.message, { status: 500});
  }
}