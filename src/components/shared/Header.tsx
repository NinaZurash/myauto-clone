import { Icons } from "@/Icons";

export default function Header() {
  return (
    <div className="left-0 top-0 flex w-full justify-center bg-white">
      <header className="w-full max-w-screen-lg py-4 pl-4 md:pl-0">{Icons.logo}</header>
    </div>
  );
}
