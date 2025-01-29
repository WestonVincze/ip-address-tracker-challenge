import Image from "next/image";

import { StatHighlights } from "@/components/StatHighlights";
import { SearchBar } from "@/components/SearchBar";
import GeoMap from "@/components/DynamicGeoMap";
import { IpData } from "@/types";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { ip = "" } = await searchParams;
  const domain = process.env.NEXT_DOMAIN;

  const res = await fetch(`${domain}/api/ipData?ip=${ip}`);
  const ipData: IpData = await res.json();

  return (
    <div className="relative flex flex-col">
      <div className="relative px-6 z-10 pb-0">
        {/* Title */}
        <h1 className="my-[25] md:my-[35] text-center text-3xl font-medium">IP Address Tracker</h1>

        {/* Search Bar */}
        <SearchBar initialValue={ipData.ip} placeHolder="Search for any IP Address or domain" />

        {/* Results */}
        <div className="mt-[25] md:mt-[45]">
          <StatHighlights stats={[
            {
              title: "IP Address",
              data: ipData.ip as string
            },
            {
              title: "Location",
              data: `${ipData.city}, ${ipData.region_code} ${ipData.postal}`
            },
            {
              title: "Timezone",
              data: `UTC ${ipData.time_zone.offset}`
            },
            {
              title: "ISP",
              data: ipData.asn.name as string
            }
          ]} />
        </div>
      </div>

      {/* Backgound */}
      <div className="absolute inset-0 z-0 flex flex-col h-screen">
        <div className="relative h-[300] sm:h-[280]">
          <Image
            className="sm:hidden object-cover"
            src="/pattern-bg-mobile.png"
            alt="Background pattern"
            fill
            quality={100}
            priority
          />
          <Image
            className="hidden sm:block object-cover"
            src="/pattern-bg-desktop.png"
            alt="Background pattern"
            fill
            quality={100}
            priority
          />
        </div>
        <div className="flex-grow">
          <GeoMap longitude={parseFloat(ipData.longitude)} latitude={parseFloat(ipData.latitude)} />
        </div>
      </div>
    </div>
  );
}
