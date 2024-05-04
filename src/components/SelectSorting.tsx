import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProducts } from "@/providers/ProductsProvider";

const sortFilters = {
  1: "თარიღი კლებადი",
  2: "თარიღი ზრდადი",
  3: "ფასი კლებადი",
  4: "ფასი ზრდადი",
  5: "გარბენი კლებადი",
  6: "გარბენი ზრდადი",
};
export default function SelectSorting() {
  const { sortOrder, setSortOrder } = useProducts();
  return (
    <div>
      <Select
        defaultValue={sortOrder + ""}
        onValueChange={(value) => {
          setSortOrder(Number(value));
        }}
      >
        <SelectTrigger className="w-[164px] bg-white text-xs">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {Object.entries(sortFilters).map(([value, title]) => (
            <SelectItem key={value} value={value + ""}>
              {title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
