"use client"

import dynamic from "next/dynamic";

const GeoMap = dynamic(async () => import("@/components/GeoMap").then(mod => mod.GeoMap), { ssr: false });

export default GeoMap;
