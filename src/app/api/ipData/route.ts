import { type NextRequest } from "next/server";
import mockResponse from "./mockResponse.json";
import { IpData } from "@/types";

const baseUrl = "https://api.ipdata.co";

export async function GET(request: NextRequest) {
  const apiKey = process.env.NEXT_IPDATA_API_KEY;
  const useMock = process.env.NEXT_USEMOCK === "true" || !apiKey;

  // return mock data if useMock is enabled or no API key exists
  if (useMock) { 
    console.log('Returning mock response; add a valid API key remove "USEMOCK" environment varialbe to fetch real data.');
    return Response.json(mockResponse);
  }

  // try to parse ip from search params
  const searchParams = request.nextUrl.searchParams;
  const ip = searchParams.get("ip");
  const path = ip ? `/${ip}` : '';

  try {
    const res = await fetch(`${baseUrl}${path}?api-key=${apiKey}`);
    if (!res.ok) {
      throw new Error(`Error fetching IP data: ${res.statusText}`);
    }
    const ipData: IpData = await res.json();
    return Response.json(ipData);
  } catch (error) {
    console.error(error);
    return Response.json({ error: `Unexpected error: ${(error as Error).message}` }, { status: 500 });
  }
}
