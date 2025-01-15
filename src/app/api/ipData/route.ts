import { type NextRequest } from "next/server";
import mockResponse from "./mockResponse.json";

const baseUrl = "https://api.ipdata.co";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const useMock = searchParams.get("useMock") === "true";

  if (useMock) { 
    console.log('Returning mock response; remove "useMock" param to fetch real results.');
    return Response.json(mockResponse);
  }

  const apiKey = process.env.NEXT_IPDATA_API_KEY;

  // try to parse ip from search params
  const ip = searchParams.get("ip");
  const path = ip ? `/${ip}` : '';

  const res = await fetch(`${baseUrl}${path}?api-key=${apiKey}`);
  const ipData = await res.json();

  return Response.json(ipData);
}
