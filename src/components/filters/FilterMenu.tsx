"use client";

import { Icons } from "@/Icons";

import { useState, type ReactElement } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductsContext } from "@/providers/ProductsProvider";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import FilterPrice from "./FilterPrice";

const filterButtons = [Icons.car, Icons.tractor, Icons.motorcycle];

export default function FilterMenu() {
  const {
    categories,
    manufacturers,
    setManFilter,
    setCatFilter,
    forRent,
    setForRent,
    setPriceFromTo,
  } = useProductsContext();

  // State variables for storing selected values
  const [selectedForRent, setSelectedForRent] = useState(forRent.toString());
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFromToLocal, setPriceFromToLocal] = useState<[number | "", number | ""]>([0, ""]);

  const applyFilters = () => {
    setForRent(Number(selectedForRent));
    setManFilter(selectedManufacturer);
    setCatFilter(selectedCategory);
    setPriceFromTo(priceFromToLocal);
  };

  return (
    <div className="hidden h-[525px] w-[250px] flex-col overflow-hidden rounded-lg rounded-t-xl border bg-white text-xs lg:block">
      <div className="flex w-full items-center">
        {filterButtons.map((icon, i) => (
          <AutoButtons key={i} selected={i === 0 ? true : undefined} icon={icon} />
        ))}
      </div>
      <div className="flex flex-col gap-4 border-y p-6">
        <div className="flex flex-col gap-2">
          <span>გარირების ტიპი</span>
          <Select
            defaultValue={selectedForRent}
            onValueChange={(value) => setSelectedForRent(value)}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="იყიდება" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">იყიდება</SelectItem>
              <SelectItem value="1">ქირავდება</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <span>მწარმოებელი</span>
          <Select
            defaultValue={selectedManufacturer}
            onValueChange={(value) => setSelectedManufacturer(value)}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="ყველა" />
            </SelectTrigger>
            <SelectContent>
              {manufacturers.map((man) => (
                <SelectItem key={man.man_id} value={man.man_id + ""}>
                  {man.man_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2">
          <span>კატეგორია</span>
          <Select
            defaultValue={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="ყველა კატეგორია" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.category_id} value={category.category_id + ""}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <FilterPrice priceFromToLocal={priceFromToLocal} setPriceFromToLocal={setPriceFromToLocal} />
      <div className="mt-10  flex w-full flex-col  items-center border-t bg-white py-4 text-sm">
        <Button onClick={applyFilters} className="h-8 bg-[#FD4100] px-14 hover:bg-[#FD4100]">
          ძებნა 197,963
        </Button>
      </div>
    </div>
  );
}

function AutoButtons({ icon, selected }: { icon: ReactElement; selected?: boolean }) {
  return (
    <div
      className={cn("flex-1 border-l bg-[#F9F9FB]", {
        "border-b border-b-[#FD4100] bg-white": selected,
      })}
    >
      <div className="flex  cursor-pointer items-center justify-center p-4 hover:bg-white">
        {icon}
      </div>
    </div>
  );
}
