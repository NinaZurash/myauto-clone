"use client";

import { use } from "react";
import Card from "./Card";
import { useProducts } from "@/providers/ProductsProvider";
import { Filter } from "lucide-react";
import FilterByTime from "./FilterByTime";
import SelectSorting from "./SelectSorting";

export default function ProductsListing() {
  const { products, isLoading, totalItems } = useProducts();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="hidden lg:flex flex-1 flex-col gap-4">
      <div className="flex justify-between">
        <span className="text-base text-[#272A37]">
          {totalItems} განცხადება
        </span>
        <div className="flex gap-2">
          <FilterByTime />
          <SelectSorting />
        </div>
      </div>
      {products.length > 0 &&
        products.map((product) => (
          <Card key={product.car_id} product={product} />
        ))}
    </div>
  );
}
