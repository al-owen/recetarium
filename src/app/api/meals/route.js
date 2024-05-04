import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json("Hello, GET Next.js!");
}

export function POST() {
  return NextResponse.json("Hello, POST Next.js!");
}