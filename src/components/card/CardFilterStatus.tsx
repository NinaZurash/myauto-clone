import { Icons } from "@/Icons";

import type { Product } from "@/providers/types";

import { Badge } from "../ui/badge";

export default function CardFilterStatus({ product }: { product: Product }) {
  return product.customs_passed ? (
    <Badge className="rounded-md bg-[#EEFBF1] text-[10px] font-normal text-[#1EB676] hover:bg-[#EEFBF1]">
      {Icons.tick} განბაჟებული
    </Badge>
  ) : (
    <Badge className="rounded-md  bg-[#FFE3E3] text-[10px] font-normal text-[#FF3B30] hover:bg-[#FFE3E3]">
      განბაჟება 3,318 ლ
    </Badge>
  );
}
