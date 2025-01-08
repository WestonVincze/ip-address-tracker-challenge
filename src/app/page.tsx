import Image from "next/image";

import { Map } from "@/components/Map";
import { StatHighlights } from "@/components/StatHighlights";

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`);
  const ipData = await res.json();
  console.log(ipData);

  return (
    <div className="bg-[url('/pattern-bg-desktop.png')] bg-contain">
      {/* Title */}
      <h1 className="text-center text-3xl text-bold">IP Address Tracker</h1>

      {/* Search Bar */}
      <div className="text-center">
        <input type="text" className="rounded-lg" />
        <button>{'>'}</button>
      </div>

      {/* Results */}
      <StatHighlights stats={[
        {
          title: "IP Address",
          data: ipData.ip as string
        },
        {
          title: "Location",
          data: ipData.location.region as string
        },
        {
          title: "Timezone",
          data: ipData.location.timezone as string
        },
        {
          title: "ISP",
          data: ipData.isp as string
        }
      ]} />

      {/* Backgound */}
      <div>
        {/* Static Image */}

        {/* Map */}
        <Map />
      </div>
    </div>
  );
}
