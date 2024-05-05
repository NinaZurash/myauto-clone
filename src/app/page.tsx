import { Icons } from "@/Icons";
import FilterMenu from "@/components/FilterMenu";
import MobileDefaultFilters from "@/components/MobileDefaultFilters";
import ProductListingFilter from "@/components/ProductListingFilter";
import ProductsListing from "@/components/ProductsListing";

export default function Home() {
  return (
    <section className="flex flex-col w-full">
      <MobileDefaultFilters />

      <div className="text-[#6F7383] hidden lg:flex text-xs  my-6 items-center">
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
