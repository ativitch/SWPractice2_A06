import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link
      href={pageRef}
      className="px-3 py-2 text-sm font-medium text-gray-900 hover:text-black"
    >
      {title}
    </Link>
  );
}