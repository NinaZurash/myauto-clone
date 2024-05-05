import { Icons } from "@/Icons";
import CardFilterStatus from "./CardFilterStatus";
import Image from "next/image";
import { Model, Product, useProducts } from "@/providers/ProductsProvider";
import CardHeader from "./CardHeader";
import CardParameters from "./CardParameters";
import CardFooter from "./CardFooter";
import { useFetchModels } from "@/services/useFetchModels";
import { useEffect, useState } from "react";

export default function Card({ product }: { product: Product }) {
  const { mutateAsync } = useFetchModels();
  const { manufacturers } = useProducts();
  const man = manufacturers.find(
    (man) => man.man_id.toString() === product.man_id.toString()
  );
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
          .find(
            (model: Model) =>
              model.model_id.toString() === product.model_id.toString()
          )
          ?.model_name.toString() || ""
      );
    };
    fetchModels();
  }, []);
  return (
    <div className="w-full flex flex-col p-4 gap-3 bg-white">
      <div className="flex items-center font-normal gap-1 text-sm">
        <span className="text-[#272A37] gap-1 flex font-normal">
          {Icons.vipPlus} {man?.man_name.toString() + " " + modelType || ""}
        </span>
        <span className="text-[#8996AE]">{product.prod_year} წ</span>
      </div>
      <div className="flex justify-between">
        <span className="text-xl items-center font-bold flex gap-1">
          {product.price_value.toLocaleString()} {Icons.gel}
        </span>
        <CardFilterStatus />
      </div>
      <Image
        src={`https://static.my.ge/myauto/photos/${product.photo}/thumbs/${product.car_id}_1.jpg?v=${product.photo_ver}`}
        alt="car"
        width={400}
        height={400}
        className="rounded-2xl  w-full"
      />
      <div className="flex gap-4">
        <div className="flex w-full gap-2 flex-col justify-between">
          <div className="text-xs flex items-center gap-2 text-gray-400">
            <span>{Icons.fire}</span>
            <span>{product.views} ნახვა </span>
            <span>• {timeAgoText}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
