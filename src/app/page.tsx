import Image from "next/image";

import { Map } from "@/components/Map";

export default async function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`);
  const ipData = await res.json();
  console.log(ipData);

  return (
    <div className="bg-[url('/pattern-bg-desktop.png')] bg-contain">
      {/* Title */}
      <h1 className="text-center">IP Address Tracker</h1>

      {/* Search Bar */}
      <div className="text-center">
        <input type="text" />
        <button>{'>'}</button>
      </div>

      {/* Results */}
      <div className="flex gap-5 justify-center">
        {/* IP Address */}
        <div className="flex flex-col">
          <label className="uppercase">IP Address</label>
          <span>{ipData.ip}</span>
        </div>
        {/* Location */}
        <div className="flex flex-col">
          <label className="uppercase">Location</label>
          {ipData.location.region}
        </div>
        {/* Timezone */}
        <div className="flex flex-col">
          <label className="uppercase">Timezone</label>
          {ipData.location.timezone}
        </div>
        {/* ISP */}
        <div className="flex flex-col">
          <label className="uppercase">ISP</label>
          {ipData.isp}
        </div>
      </div>

      {/* Backgound */}
      <div>
        {/* Static Image */}

        {/* Map */}
        <Map />
      </div>
    </div>
  );
}
