import { Icons } from "@/Icons";
import { Product } from "@/providers/ProductsProvider";

export default function CardHeader({
  product,
  title,
}: {
  product: Product;
  title: string;
}) {
  return (
    <div className="flex w-full justify-between gap-2">
      <div className="flex text-sm gap-2 items-center">
        <h3 className="text-[#272A37] font-bold">{title}</h3>
        <span className="text-[#8996AE]">{product.prod_year} წ</span>
      </div>
      <div className="flex gap-2 items-center text-[11px]">
        {product.customs_passed ? (
          <div className="flex">
            <span>{Icons.tick}</span>
            <span className="text-[#26B753]"> განბაჟებული</span>
          </div>
        ) : (
          <div className="flex gap-1">
            <span className="text-[#FF3B30]">განბაჟება</span>
            <span className="text-[#FF3B30]">2,176 ლ</span>
          </div>
        )}
        <span>
          <Icons.cardFlags.GEO />
        </span>
        <span>რუსთავის ავტო</span>
      </div>
    </div>
  );
}
