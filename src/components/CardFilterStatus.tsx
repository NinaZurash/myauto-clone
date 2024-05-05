import { Product } from "@/providers/ProductsProvider";
import { Badge } from "./ui/badge";

export default function CardFilterStatus({ product }: { product: Product }) {
  return product.customs_passed ? (
    <Badge className="bg-[#EEFBF1] text-[10px] rounded-md font-normal text-[#1EB676]">
      განბაჟებული
    </Badge>
  ) : (
    <Badge className="bg-[#FFE3E3]  text-[10px] rounded-md font-normal text-[#FF3B30]">
      განბაჟება 3,318 ლ
    </Badge>
  );
}
