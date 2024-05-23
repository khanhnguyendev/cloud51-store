"use client";

import { Button } from "@nextui-org/button";
import React, { useState } from "react";
import { Product } from "@/utils/interface";
import { SlScreenSmartphone } from "react-icons/sl";
import { RiMacbookLine } from "react-icons/ri";
import { TbDeviceIpad } from "react-icons/tb";
import IPhoneTab from "@/components/IPhoneTab";
import Macbook from "@/components/Macbook";
import IPad from "@/components/IPad";

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
        {[
          { label: "iPhone", icon: <SlScreenSmartphone />, value: "iphone" },
          { label: "Macbook", icon: <RiMacbookLine />, value: "macbook" },
          { label: "iPad", icon: <TbDeviceIpad />, value: "ipad" },
        ].map((tab) => (
          <Button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`h-[50px] py-2 px-4 min-w-[100px] text-white text-xs 2xl:text-base focus:outline-none transition-colors duration-300 dark:bg-opacity-80
        ${activeTab === tab.value ? "bg-red-500" : "bg-red-200"} 
        ${activeTab === tab.value ? "focus:bg-red-600 dark:focus:bg-red-400" : ""}
      `}
            startContent={tab.icon}
          >
            <span className="text-xs 2xl:text-base">{tab.label}</span>
          </Button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 mt-10">
        {activeTab === "iphone" && (
          <IPhoneTab products={filterProducts("iphone")} />
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
