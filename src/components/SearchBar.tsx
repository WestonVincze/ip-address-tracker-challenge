"use client"

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { isValidDomain, isValidPartialIpAddress, isValidIPAddress } from "@/helpers";

interface SearchBarProps {
  initialValue?: string;
  placeHolder?: string;
}

export const SearchBar = ({ placeHolder = "", initialValue = "" }: SearchBarProps) => {
  const router = useRouter();
  const [ip, setIp] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!ip || !isValidDomain(ip) && !isValidIPAddress(ip)) {
      toast.error("Please enter a valid ip address");
      setError(true);
      return;
    }

    setError(false);

    if (!ip) {
      router.replace('/');
    } else {
      router.push(`?ip=${ip}`);
    }
  }

  const handleChange = (c: string) => {
    const isIpAddressInput = /^[0-9][0-9.]*$/.test(c);

    // auto format ip address
    if (isIpAddressInput) {
      // Split the input into segments
      let segments = c.split('.');

      // Automatically add a decimals while user enters ipv4 ip address
      if (segments.length < 4) {
        segments = segments.map(segment => segment.match(/.{1,3}/g)?.join('.') || segment);
        c = segments.join('.');
      }

      if (!isValidPartialIpAddress(c)) return;
    }

    setIp(c);
  }

  return(
    <div className={`flex justify-center min-w-min w-full max-w-555 mx-auto rounded-xl ${error ? 'outline outline-2 outline-red-500' : ''}`}>
      <input
        className={`w-full shadow-md rounded-l-xl text-very-dark-gray py-4 px-6 focus:outline-none text-18px`}
        type="text"
        value={ip}
        onChange={e => handleChange(e.target.value)}
        onKeyDownCapture={e => e.key === "Enter" && handleSubmit()}
        placeholder={placeHolder}
        onFocus={() => setError(false)}
      />
      <button
        className="shadow-md py-3 px-6 rounded-r-xl bg-gray-900 focus:outline-none hover:bg-gray-700 transition-all duration-300"
        onClick={handleSubmit}
      >
        <Image src="icon-arrow.svg" alt="search" width={11} height={14} />
      </button>
      <ToastContainer />
    </div>
  )
}
