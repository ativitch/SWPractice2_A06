import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <div className="flex h-14 w-full items-center justify-end bg-white px-6 shadow-sm">
      <div className="flex items-center gap-4">
        <TopMenuItem title="Booking" pageRef="/booking" />
        <Image
          src="/img/logo.png"
          alt="logo"
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </div>
  );
}