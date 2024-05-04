"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { Image } from "@nextui-org/image";
import IphonePage from "./IphonePage";
import { Product } from "@/utils/interface";
import { IphoneIcon } from "./icons";

type Props = {
  products: Product[];
};

const Tabs = ({ products }: Props) => {
  const [activeTab, setActiveTab] = useState("iphone");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="mx-auto p-8 w-full">
      {/* Tabs */}
      <div className="flex justify-center gap-5">
        <Button
          onClick={() => handleTabClick("iphone")}
          className={`w-[150px] h-[60px] py-2 px-4 ${activeTab === "iphone" ? "bg-blue-500" : "bg-blue-200"} text-white dark:bg-blue-600 dark:text-white dark:hover:bg-opacity-40 dark:bg-opacity-50 focus:outline-none focus:bg-blue-600 dark:focus:bg-blue-400`}
          // startContent={<IphoneIcon />}
        >
          <span className="text-base">iPhone</span>
        </Button>
        <Button
          onClick={() => handleTabClick("macbook")}
          className={`w-[150px] h-[60px] py-2 px-4 ${activeTab === "macbook" ? "bg-blue-500" : "bg-blue-200"} text-white dark:bg-blue-600 dark:text-white dark:hover:bg-opacity-40 dark:bg-opacity-50 focus:outline-none focus:bg-blue-600 dark:focus:bg-blue-400`}
          // startContent={
          //   <Image
          //     src="/assets/images/macbook.svg"
          //     height={50}
          //     width={50}
          //     alt="macbook"
          //   />
          // }
        >
          <span className="text-base">Macbook</span>
        </Button>
        <Button
          onClick={() => handleTabClick("ipad")}
          className={`w-[150px] h-[60px] py-2 px-4 ${activeTab === "ipad" ? "bg-blue-500" : "bg-blue-200"} text-white dark:bg-blue-600 dark:text-white dark:hover:bg-opacity-40 dark:bg-opacity-50 focus:outline-none focus:bg-blue-600 dark:focus:bg-blue-400`}
          // startContent={
          //   <Image
          //     src="/assets/images/ipad.svg"
          //     height={50}
          //     width={50}
          //     alt="ipad"
          //   />
          // }
        >
          <span className="text-base">iPad</span>
        </Button>
      </div>

      {/* Tab Content */}
      <div className="p-4 mt-10">
        {activeTab === "iphone" && <IphonePage products={products} />}
        {activeTab === "macbook" && <span>Chưa có sản phẩm...</span>}
        {activeTab === "ipad" && <span>Chưa có sản phẩm...</span>}
      </div>
    </div>
  );
};

export default Tabs;
