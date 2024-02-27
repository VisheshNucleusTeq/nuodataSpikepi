import { NextResponse } from "next/server";
import {
  withApiAuthRequired,
  getSession,
  getAccessToken,
} from "@auth0/nextjs-auth0";

export async function GET(request) {
  console.log("in correct function");
  const response = new NextResponse();
  const session = await getSession(request, response);
  return NextResponse.json({ ...session });
}

export default async function  handler(req, res) {
    // const session = await getSession(req, res);
    // console.log("session",session)
  res.status(200).json({ name: "John Doe" });
}