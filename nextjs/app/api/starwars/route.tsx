import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request, res: NextResponse) {
  const response = await axios.get("https://swapi.dev/api/people/1/");

  return NextResponse.json(response.data);
}
