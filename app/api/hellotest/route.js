'use server'
import { NextResponse } from "next/server";


export async function GET(request) {
  console.log("in correct function");
  const response = new NextResponse();

  return NextResponse.json({hello:'world' });
}
