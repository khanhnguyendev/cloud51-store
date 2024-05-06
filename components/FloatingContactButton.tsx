"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const FloatingContactButton = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-2 fixed bottom-4 right-4 z-50 mb-[120px]">
        <button
          className="flex flex-row justify-center items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full shadow-lg"
          onClick={() => (window.location.href = "tel:888393339")}
        >
          <FaPhoneAlt />
        </button>
        <button
          className="flex flex-row justify-center items-center gap-3 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-full shadow-lg"
          onClick={() => (window.location.href = "tel:888393339")}
        >
          <SiZalo />
        </button>
      </div>
    </>
  );
};

export default FloatingContactButton;
