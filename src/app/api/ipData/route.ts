import { type NextRequest } from "next/server";

const baseUrl = "https://api.ipdata.co";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_IPDATA_API_KEY;

  // try to parse ip from search params
  const searchParams = request.nextUrl.searchParams;
  const ip = searchParams.get("ip");
  const path = ip ? `/${ip}` : '';

  const res = await fetch(`${baseUrl}${path}?api-key=${apiKey}`);
  const ipData = await res.json();

  return Response.json(ipData);
}
