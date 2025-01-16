"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchBarProps {
  placeHolder?: string;
}

export const SearchBar = ({ placeHolder = "" }: SearchBarProps) => {
  const router = useRouter();
  const [ip, setIp] = useState("");

  const handleSubmit = () => {
    if (!ip) {
      router.replace('/');
    } else {
      router.push(`?ip=${ip}`);
    }
  }

  // TODO: allow for domain address input as well
  // auto format ip address
  const handleChange = (c: string) => {
    // Remove all non-digit and non-dot characters
    c = c.replace(/[^\d.]/g, '');

    // Split the input into segments
    let segments = c.split('.');

    // Automatically add dots after every 3 digits if there are fewer than 4 segments
    if (segments.length < 4) {
      segments = segments.map(segment => segment.match(/.{1,3}/g)?.join('.') || segment);
      c = segments.join('.');
    }

    const partialIpRegex = /^(\d{1,3}\.?){0,3}\d{0,3}$/;
    if (!partialIpRegex.test(c)) return;

    setIp(c);
  }

  return(
    <div className="flex justify-center min-w-min w-full md:w-1/2 lg:w-1/3 mx-auto">
      <input
        className="w-full shadow-md rounded-l-xl text-very-dark-gray py-4 px-6 focus:outline-none text-18px"
        type="text"
        value={ip}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeHolder}
      />
      <button
        className="shadow-md py-3 px-6 rounded-r-xl bg-gray-900 focus:outline-none hover:bg-gray-700 transition-all duration-300"
        onClick={handleSubmit}
      >
        <Image src="icon-arrow.svg" alt="search" width={11} height={14} />
      </button>
    </div>
  )
}
