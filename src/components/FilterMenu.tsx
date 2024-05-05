"use client";

import { Icons } from "@/Icons";
import { Button } from "./ui/button";
import { ReactElement, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useProducts } from "@/providers/ProductsProvider";
import { Input } from "./ui/input";
import FilterPrice from "./FilterPrice";
import { useFetchProducts } from "@/services/useFetchProducts";

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
  } = useProducts();

  // State variables for storing selected values
  const [selectedForRent, setSelectedForRent] = useState(forRent.toString());
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceFromToLocal, setPriceFromToLocal] = useState<
    [number | "", number | ""]
  >([0, ""]);

  const applyFilters = () => {
    setForRent(Number(selectedForRent));
    setManFilter(selectedManufacturer);
    setCatFilter(selectedCategory);
    setPriceFromTo(priceFromToLocal);
  };

  return (
    <div className="hidden lg:block text-xs rounded-lg flex-col border h-[525px] w-[250px] rounded-t-xl overflow-hidden bg-white">
      <div className="flex w-full items-center">
        {filterButtons.map((icon, i) => (
          <AutoButtons
            key={i}
            selected={i === 0 ? true : undefined}
            icon={icon}
          />
        ))}
      </div>
      <div className="border-y p-6 flex flex-col gap-4">
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
                <SelectItem
                  key={category.category_id}
                  value={category.category_id + ""}
                >
                  {category.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <FilterPrice
        priceFromToLocal={priceFromToLocal}
        setPriceFromToLocal={setPriceFromToLocal}
      />
      <div className="flex  py-4 mt-10 bg-white  text-sm border-t flex-col w-full items-center">
        <Button
          onClick={applyFilters}
          className="bg-[#FD4100] hover:bg-[#FD4100] h-8 px-14"
        >
          ძებნა 197,963
        </Button>
      </div>
    </div>
  );
}

function AutoButtons({
  icon,
  selected,
}: {
  icon: ReactElement;
  selected?: boolean;
}) {
  return (
    <div
      className={cn("flex-1 border-l bg-[#F9F9FB]", {
        "bg-white border-b-[#FD4100] border-b": selected,
      })}
    >
      <div className="p-4  hover:bg-white cursor-pointer flex justify-center items-center">
        {icon}
      </div>
    </div>
  );
}
