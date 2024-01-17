import { NextResponse } from "next/server";
import axios from "axios";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  return NextResponse.json({
    data: { name: "Patrick", age: "27" },
    status: 200,
  });
}
