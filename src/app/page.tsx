import { GeoMap } from "@/components/GeoMap";
import { StatHighlights } from "@/components/StatHighlights";
import { SearchBar } from "@/components/SearchBar";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { ip = "" } = await searchParams;
  const domain = process.env.NEXT_DOMAIN;

  const res = await fetch(`${domain}/api/ipData?ip=${ip}&useMock=true`);
  const ipData = await res.json();

  return (
    <div className="relative flex flex-col h-screen">
      <div className="relative p-6 pt-8 z-10">
        {/* Title */}
        <h1 className="text-center text-3xl font-medium">IP Address Tracker</h1>

        {/* Search Bar */}
        <SearchBar placeHolder="Search for any IP Address or domain" />

        {/* Results */}
        <div className="mt-8">
          <StatHighlights stats={[
            {
              title: "IP Address",
              data: ipData.ip as string
            },
            {
              title: "Location",
              data: `${ipData.city}, ${ipData.region_code}, ${ipData.country_name} ${ipData.postal}`
            },
            {
              title: "Timezone",
              data: `${ipData.time_zone.abbr} ${ipData.time_zone.offset}`
            },
            {
              title: "ISP",
              data: ipData.asn.name as string
            }
          ]} />
        </div>
      </div>

      {/* Backgound */}
      <div className="absolute inset-0 bg-[url('/pattern-bg-desktop.png')] bg-contain"></div>
      <div className="h-full w-full relative z-0 mt-[-75px]">
        <GeoMap longitude={parseFloat(ipData.longitude)} latitude={parseFloat(ipData.latitude)} />
      </div>
    </div>
  );
}
