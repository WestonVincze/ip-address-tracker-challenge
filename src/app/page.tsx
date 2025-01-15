import { GeoMap } from "@/components/GeoMap";
import { StatHighlights } from "@/components/StatHighlights";
import { SearchBar } from "@/components/SearchBar";

export default async function Home() {
  // TODO: change base domain to env variable
  const ipData = await fetch(`http://localhost:3000/api/ipData`)
  console.log(ipData);

  return (
    <div className="relative">
      <div className="relative pt-8 z-10">
        {/* Title */}
        <h1 className="text-center text-3xl font-medium">IP Address Tracker</h1>

        {/* Search Bar */}
        <SearchBar />

        {/* Results */}
        <div className="mt-8">
          <StatHighlights stats={[
            {
              title: "IP Address",
              data: ipData.ip as string
            },
            {
              title: "Location",
              data: `${ipData.location.city}, ${ipData.location.region}, ${ipData.location.country}`
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
        </div>
      </div>

      {/* Backgound */}
      <div className="absolute inset-0 bg-[url('/pattern-bg-desktop.png')] bg-contain"></div>
      <div className="relative z-0 mt-[-75px]">
        <GeoMap />
      </div>
    </div>
  );
}
