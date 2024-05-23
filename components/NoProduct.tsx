import React from "react";
import { Chip } from "@nextui-org/react";

const NoProduct = () => {
  return (
    <Chip
      variant="shadow"
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-red-500 border-small border-white/50 shadow-red-500/30",
        content: "drop-shadow shadow-black text-white",
      }}
    >
      Chưa có sản phẩm...
    </Chip>
  );
};

export default NoProduct;
