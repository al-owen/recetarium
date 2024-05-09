import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import formidable from 'formidable';

export async function GET() {
  try{
    const meals = await prisma.meal.findMany();
    return NextResponse.json({data:meals}, {status: 201});
  }catch(error){
    return new NextResponse(error.message, {status: 500});
  }
}

export async function POST(request) {
  try {
    const data = await request.json();
    const meal = await prisma.meal.create({ 
      data:data 
    });
    return new NextResponse(JSON.stringify(meal), {
      headers: {"Content-Type": "application/json"},
      status: 201
    });
  } catch (error) {
    return new NextResponse(error.message, { status: 500});
  }
}