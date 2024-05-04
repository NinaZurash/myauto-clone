import { Icons } from "@/Icons";

export default function Header() {
  return (
    <div className="top-0 left-0 flex w-full justify-center bg-white">
      <header className="max-w-screen-lg w-full py-4 pl-4 md:pl-0">
        {Icons.logo}
      </header>
    </div>
  );
}
