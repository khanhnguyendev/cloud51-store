"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const FloatingContactButton = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 fixed bottom-4 right-4 z-50 mb-[120px]">
        <button
          className="flex flex-row justify-center items-center gap-3 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-lg"
          onClick={() => (window.location.href = "tel:888393339")}
        >
          <FaPhoneAlt className="animate-spin text-xl" />
        </button>
        <button
          className="flex flex-row justify-center items-center gap-3 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full shadow-lg"
          onClick={() => window.open("https://zalo.me/0888393339", "_blank")}
        >
          <SiZalo className="animate-spin text-xl" />
        </button>
        {/* <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span> */}
      </div>
    </>
  );
};

export default FloatingContactButton;
