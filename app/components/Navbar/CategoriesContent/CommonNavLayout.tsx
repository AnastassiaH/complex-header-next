import Link from "next/link";
import { Navigation } from "@/app/config/navData";

export default function CommonNavLayout({
  title,
  listItems,
  description,
}: {
  title?: string;
  listItems?: Navigation[];
  description?: string;
}) {
  return (
    <div className="flex flex-col justify-start items-start gap-4 h-full">
      <h2 className="text-xl text-blue-500 font-bold">{title}</h2>
      {listItems &&
        <ul className="flex flex-col flex-wrap gap-3 gap-x-20 list-disc h-9/10">
          {listItems.map((item) => (
            <li key={item.id} className="p-0 m-0">
              <Link href={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>}
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
}