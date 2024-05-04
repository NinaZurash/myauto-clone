"use client";

import { Icons } from "@/Icons";
import { Button } from "./ui/button";
import { ReactElement } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useProducts } from "@/providers/ProductsProvider";

const filterButtons = [Icons.car, Icons.tractor, Icons.motorcycle];

export default function FilterMenu() {
  const {
    categories,
    manufacturers,
    setManFilter,
    setCatFilter,
    manFilter,
    catFilter,
    forRent,
    setForRent,
  } = useProducts();
  return (
    <div className="text-xs rounded-lg block flex-col border h-[525px] w-[250px] rounded-t-xl overflow-hidden bg-white">
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
            defaultValue={forRent.toString()}
            onValueChange={(value) => setForRent(Number(value))}
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
            defaultValue={manFilter === "" ? undefined : manFilter}
            onValueChange={(value) => {
              setManFilter(value);
            }}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder={manFilter === "" && "ყველა"} />
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
            defaultValue={catFilter === "" ? undefined : catFilter}
            onValueChange={(value) => {
              setCatFilter(value);
            }}
          >
            <SelectTrigger className="bg-white">
              <SelectValue
                placeholder={catFilter === "" && "ყველა კატეგორია"}
              />
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
      <div className="flex justify-between flex-col">
        <div className="flex p-6 items-center justify-between">
          <span className="text-[13px]">ფასი</span>
          <div className="flex gap-3 w-fit border rounded-3xl items-center">
            <span className="">{Icons.currency}</span>
          </div>
        </div>

        <div className="flex mt-12 pt-4 text-sm border-t flex-col w-full items-center">
          <Button className="bg-[#FD4100] hover:bg-[#FD4100] w-52">
            ძებნა 197,963
          </Button>
        </div>
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
