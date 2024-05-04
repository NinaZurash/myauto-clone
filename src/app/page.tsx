import { Icons } from "@/Icons";
import Card from "@/components/Card";
import FilterMenu from "@/components/FilterMenu";
import MobileDefaultFilters from "@/components/MobileDefaultFilters";
import ProductsListing from "@/components/ProductsListing";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-col w-full">
      <MobileDefaultFilters />

      <div className="text-[#6F7383] text-xs hidden sm:flex  my-6 items-center">
        <span>მთავარი</span>
        <div>{Icons.rightArrow}</div>
        <span>ძიება</span>
        <div>{Icons.rightArrow}</div>
        <span className="text-[#FD4100]">იყიდება</span>
      </div>
      <div className="flex w-full gap-6">
        <FilterMenu />
        <ProductsListing />
      </div>
    </section>
  );
}
