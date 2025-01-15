import { type NextRequest, NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ip = searchParams.get("ip");
  console.log(ip);

  if (!ip) {
    return NextResponse.json({ error: "IP address is required" }, { status: 400 });
  }

  const apiKey = process.env.NEXT_IPDATA_API_KEY;
  const res = await fetch(`https://api.ipdata.co/${ip}?api-key=${apiKey}`);
  const ipData = await res.json();

  return Response.json({ ipData });
}
