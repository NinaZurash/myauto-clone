import { Icons } from "@/Icons";
import CardFilterStatus from "./CardFilterStatus";
import Image from "next/image";
import { Product } from "@/providers/ProductsProvider";
import CardHeader from "./CardHeader";
import CardParameters from "./CardParameters";
import CardFooter from "./CardFooter";

export default function Card({ product }: { product: Product }) {
  return (
    <div className="w-full flex flex-col p-4 gap-2 bg-white rounded-md">
      <div className="flex gap-4">
        <Image
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt="car"
          width={178}
          height={140}
          className="rounded-md"
        />
        <div className="flex w-full gap-2 flex-col justify-between">
          <CardHeader product={product} />
          {/* <div className="flex items-center justify-between gap-2">
            <h3 className="text-[#272A37] font-bold flex gap-2 items-center">
              <span>108,122</span> {Icons.gel}
            </h3>
            <CardFilterStatus />
          </div> */}
          <CardParameters product={product} />
          <CardFooter product={product} />
        </div>
      </div>
    </div>
  );
}
