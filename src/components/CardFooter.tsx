import { Icons } from "@/Icons";

import { type Product } from "@/providers/ProductsProvider";

export default function CardFooter({ product }: { product: Product }) {
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
  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center gap-2">
        {Icons.vipPlus}
        <span className="text-xs text-gray-400">
          {product.views} ნახვა • {timeAgoText}
        </span>
      </div>
      {Icons.cardActions}
    </div>
  );
}
