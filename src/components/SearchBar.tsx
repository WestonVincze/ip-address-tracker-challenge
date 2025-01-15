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
    <div className="flex justify-center mt-8">
      <input
        className="shadow-md rounded-l-lg text-very-dark-gray py-3 px-6 focus:outline-none text-18px"
        type="text"
        value={ip}
        onChange={e => handleChange(e.target.value)}
        placeholder={placeHolder}
      />
      <button
        className="shadow-md py-3 px-6 rounded-r-lg bg-very-dark-gray focus:outline-none"
        onClick={handleSubmit}
      >
        <Image src="icon-arrow.svg" alt="search" width={11} height={14} />
      </button>
    </div>
  )
}
