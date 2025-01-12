"use client"
import { useState } from "react";
import Image from "next/image";

interface SearchBarProps {
  initial: string
}

export const SearchBar = ({ initial = "" }: SearchBarProps) => {
  const [ip, setIp] = useState(initial);

  return(
    <div className="flex justify-center mt-8">
      <input type="text" className="shadow-md rounded-l-lg text-very-dark-gray py-3 px-6 focus:outline-none text-18px" />
      <button className="shadow-md py-3 px-6 rounded-r-lg bg-very-dark-gray focus:outline-none">
        <Image src="icon-arrow.svg" alt="search" width={11} height={14} />
      </button>
    </div>
  )
}
