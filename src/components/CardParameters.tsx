import { Icons } from "@/Icons";
import { Product } from "@/providers/ProductsProvider";
import { ReactElement } from "react";

export default function CardParameters({ product }: { product: Product }) {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex text-xs gap-12">
        <div className="flex-col flex gap-2">
          <Parameter icon={Icons.motor} title="დატ. ჰიბრიდი" />
          <Parameter icon={Icons.avtomatic} title={"ავტომატიკა"} />
        </div>
        <div className="flex-col flex gap-2">
          <Parameter icon={Icons.speed} title={product.car_run_km + " კმ"} />
          <Parameter
            icon={Icons.sache}
            title={product.right_wheel ? "მარჯვენა" : "მარცხენა"}
          />
        </div>
      </div>
      <div className="text-xl items-center flex gap-1">
        {product.price_value} {Icons.gel}
      </div>
    </div>
  );
}

const Parameter = ({ icon, title }: { icon: JSX.Element; title: string }) => {
  return (
    <div className="flex items-center gap-3">
      <span>{icon}</span>
      <span>{title}</span>
    </div>
  );
};
