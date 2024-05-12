"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { Product } from "@/utils/interface";
import { SlScreenSmartphone } from "react-icons/sl";
import { RiMacbookLine } from "react-icons/ri";
import { TbDeviceIpad } from "react-icons/tb";
import IPhone from "./IPhone";
import Macbook from "./Macbook";
import IPad from "./IPad";

type Props = {
  products: Product[];
};

const Tabs = ({ products }: Props) => {
  const [activeTab, setActiveTab] = useState("iphone");

  const filterProducts = (type: string) => {
    return products.filter((product) =>
      product.tag.some((tag) => tag.slug.current === type)
    );
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto p-8 w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-2">
        <Button
          onClick={() => handleTabClick("iphone")}
          className={`h-[60px] py-2 px-4 ${activeTab === "iphone" ? "bg-pink-500" : "bg-pink-200"} text-white dark:bg-pink-600 dark:text-white dark:hover:bg-opacity-40 dark:bg-opacity-50 focus:outline-none focus:bg-pink-600 dark:focus:bg-pink-400`}
          startContent={<SlScreenSmartphone />}
          style={{ minWidth: "100px" }}
        >
          <span className="text-base">iPhone</span>
        </Button>
        <Button
          onClick={() => handleTabClick("macbook")}
          className={`h-[60px] py-2 px-4 ${activeTab === "macbook" ? "bg-pink-500" : "bg-pink-200"} text-white dark:bg-pink-600 dark:text-white dark:hover:bg-opacity-40 dark:bg-opacity-50 focus:outline-none focus:bg-pink-600 dark:focus:bg-pink-400`}
          startContent={<RiMacbookLine />}
          style={{ minWidth: "120px" }}
        >
          <span className="text-base">Macbook</span>
        </Button>
        <Button
          onClick={() => handleTabClick("ipad")}
          className={`h-[60px] py-2 px-4 ${activeTab === "ipad" ? "bg-pink-500" : "bg-pink-200"} text-white dark:bg-pink-600 dark:text-white dark:hover:bg-opacity-40 dark:bg-opacity-50 focus:outline-none focus:bg-pink-600 dark:focus:bg-pink-400`}
          startContent={<TbDeviceIpad />}
          style={{ minWidth: "100px" }}
        >
          <span className="text-base">iPad</span>
        </Button>
      </div>

      {/* Tab Content */}
      <div className="p-4 mt-10">
        {activeTab === "iphone" && (
          <IPhone products={filterProducts("iphone")} />
        )}
        {activeTab === "macbook" && (
          <Macbook products={filterProducts("macbook")} />
        )}
        {activeTab === "ipad" && <IPad products={filterProducts("ipad")} />}
      </div>
    </div>
  );
};

export default Tabs;