import { Icons } from "@/Icons";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useProductsContext } from "@/providers/ProductsProvider";
import type { Model, Product } from "@/providers/types";
import { useModels } from "@/services/useModels";

import CardFilterStatus from "./CardFilterStatus";

export default function MobileCard({ product }: { product: Product }) {
  const { mutateAsync } = useModels();
  const { manufacturers } = useProductsContext();
  const man = manufacturers.find((man) => man.man_id.toString() === product.man_id.toString());
  const [modelType, setModelType] = useState<string>("");

  const placedTime = new Date(product.order_date);
  const currentTime = new Date();
  const timeDiff = Math.abs(currentTime.getTime() - placedTime.getTime());
  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  const hoursDiff = Math.floor(minutesDiff / 60);
  const daysDiff = Math.floor(hoursDiff / 24);
  let timeAgoText = "";
  if (daysDiff > 0) {
    timeAgoText = `${daysDiff} დღის წინ`;
  } else if (hoursDiff > 0) {
    timeAgoText = `${hoursDiff} საათის წინ`;
  } else {
    timeAgoText = `${minutesDiff} წუთის წინ`;
  }
  useEffect(() => {
    const fetchModels = async () => {
      const response = await mutateAsync({ manId: product.man_id + "" });
      const data = response.data.data;

      setModelType(
        data
          .find((model: Model) => model.model_id.toString() === product.model_id.toString())
          ?.model_name.toString() || "",
      );
    };
    fetchModels();
  }, [mutateAsync, product.man_id, product.model_id]);
  return (
    <div className="w-full  bg-white">
      <div className="flex flex-col gap-3 p-4">
        <div className="flex items-center gap-1 text-sm font-normal">
          <span className="flex gap-1 font-normal text-[#272A37]">
            {Icons.vipPlus} {man?.man_name.toString() + " " + modelType || ""}
          </span>
          <span className="text-[#8996AE]">{product.prod_year} წ</span>
        </div>
        <div className="flex justify-between">
          <span className="flex items-center gap-1 text-xl font-bold">
            {product.price_value.toLocaleString()} {Icons.gel}
          </span>
          <CardFilterStatus product={product} />
        </div>
        <Image
          src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
          alt="car"
          width={400}
          height={400}
          className="w-full  rounded-2xl"
        />
        <div className="flex w-full px-1 text-xs font-normal text-[#454857]">
          <div className="flex flex-1  flex-col gap-1">
            <span>{product.car_run_km} კმ</span>
            <span>ბენზინი</span>
            <span>ავტომატიკა</span>
          </div>
          <div className="flex flex-1 flex-col gap-1">
            <span>სედანი</span>
            <span>საჭე {product.right_wheel ? "მარჯვნივ" : "მარცხნივ"}</span>
            <div className="flex items-center gap-1">
              <span className="">
                <Icons.cardFlags.GEO width="12px" height="12px" />
              </span>
              <span>თბილისი</span>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="p-4">
        <div className="flex w-full  justify-between">
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span>{Icons.fire}</span>
            <span>{product.views} ნახვა </span>
            <span>• {timeAgoText}</span>
          </div>
          <div>{Icons.actionsMobile}</div>
        </div>
      </div>
    </div>
  );
}
