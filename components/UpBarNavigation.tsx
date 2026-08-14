"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Console } from "console";
import EyeBrow from "./ui/paragraphs/EyeBrow";
import MicroCopy from "./ui/paragraphs/MicroCopy";

export default function UpBarNavigation() {
  const pathname = usePathname();
  
  // Split the path by "/" and remove empty items
  // e.g., "/dashboard/settings/profile" -> ["dashboard", "settings", "profile"]
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");
  console.log(pathname)

  return (
    <nav>
      {/* Home link is always the starting point */}
      <Link href="/">
        Home
      </Link>

      {pathSegments.map((segment, index) => {
        const href = ` / ${pathSegments.slice(0, index + 1).join(" / ")}`;
        const isLast = index === pathSegments.length - 1;

        // Clean up the text (e.g., "user-profile" -> "User Profile")
        const formattedName = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        return (
          <React.Fragment key={href}>
            <span> / </span>
            {isLast ? (
              // Active page shouldn't be clickable
              <MicroCopy text={formattedName}/>
                // {formattedName}
            ) : (
              <Link href={href}>
                {formattedName}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

