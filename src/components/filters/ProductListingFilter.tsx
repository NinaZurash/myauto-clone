"use client";

import { useProductsContext } from "@/providers/ProductsProvider";

import FilterByTime from "./FilterByTime";
import SelectSorting from "./SelectSorting";

export default function ProductListingFilter() {
  const { totalItems } = useProductsContext();

  return (
    <div className="mb-4 hidden justify-between lg:flex">
      <span className="text-base text-[#272A37]">{totalItems} განცხადება</span>
      <div className="flex gap-2">
        <FilterByTime />
        <SelectSorting />
      </div>
    </div>
  );
}
