"use client";

import { useProducts } from "@/providers/ProductsProvider";
import FilterByTime from "./FilterByTime";
import SelectSorting from "./SelectSorting";

export default function ProductListingFilter() {
  const { totalItems } = useProducts();

  return (
    <div className="hidden lg:flex justify-between mb-4">
      <span className="text-base text-[#272A37]">{totalItems} განცხადება</span>
      <div className="flex gap-2">
        <FilterByTime />
        <SelectSorting />
      </div>
    </div>
  );
}
