"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();
  
  // Split path into array and filter out empty strings
  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <div className="wrap pathlink">
        <Link href="/"> Home</Link>    

        {segments.map((segment, index) => {
          // Reconstruct the nested path for each specific segment
          const routeTo = `/${segments.slice(0, index + 1).join("/")}`;
          const isLast = index === segments.length - 1;

          // Format the link text (e.g., "blog-posts" becomes "Blog Posts")
          const cleanText = segment
            .replace(/[-_]/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase());

        console.log(routeTo)

          return (
            <span key={routeTo}>
              <span> / </span>
              {isLast ? (<span>{cleanText}</span>) : (<Link href={`${routeTo}`}>{cleanText}</Link>)}
            </span>
          );
        })}
      </div>
  );
}
