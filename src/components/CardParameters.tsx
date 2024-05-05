import { Icons } from "@/Icons";

import { type Product } from "@/providers/ProductsProvider";

export default function CardParameters({ product }: { product: Product }) {
  return (
    <div className="flex justify-between gap-4">
      <div className="flex gap-12 text-xs">
        <div className="flex flex-col gap-2">
          <Parameter icon={Icons.motor} title="დატ. ჰიბრიდი" />
          <Parameter icon={Icons.avtomatic} title={"ავტომატიკა"} />
        </div>
        <div className="flex flex-col gap-2">
          <Parameter icon={Icons.speed} title={product.car_run_km + " კმ"} />
          <Parameter icon={Icons.sache} title={product.right_wheel ? "მარჯვენა" : "მარცხენა"} />
        </div>
      </div>
      <div className="flex items-center gap-1 text-xl">
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
