import { Icons } from "@/Icons";

import FilterMenu from "@/components/filters/FilterMenu";
import MobileDefaultFilters from "@/components/filters/MobileDefaultFilters";
import ProductListingFilter from "@/components/filters/ProductListingFilter";
import ProductsListing from "@/components/shared/ProductsListing";

export default function Home() {
  return (
    <section className="flex w-full flex-col">
      <MobileDefaultFilters />

      <div className="my-6 hidden items-center text-xs  text-[#6F7383] lg:flex">
        <span>მთავარი</span>
        <div>{Icons.rightArrow}</div>
        <span>ძიება</span>
        <div>{Icons.rightArrow}</div>
        <span className="text-[#FD4100]">იყიდება</span>
      </div>
      <div className="flex w-full gap-6">
        <FilterMenu />
        <div className="flex-1 flex-col gap-4">
          <ProductListingFilter />
          <ProductsListing />
        </div>
      </div>
    </section>
  );
}
