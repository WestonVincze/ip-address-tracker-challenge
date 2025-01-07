import { Map } from "@/components/Map";

export default function Home() {
  return (
    <div>
      {/* Title */}
      <h1>IP Address Tracker</h1>

      {/* Search Bar */}
      <div>
        <input type="text" />
        <button>{'>'}</button>
      </div>

      {/* Results */}
      <div>
        {/* IP Address */}
        <div></div>
        {/* Location */}
        <div></div>
        {/* Timezone */}
        <div></div>
        {/* ISP */}
        <div></div>
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
