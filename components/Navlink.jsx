"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Arrow from "@/public/icon-chevron.svg";

const activeLink = {
  mercury: "border-mercury",
  venus: "border-venus",
  earth: "border-earth",
  mars: "border-mars",
  jupiter: "border-jupiter",
  saturn: "border-saturn",
  uranus: "border-uranus",
  neptune: "border-neptune",
};

const Navlink = ({ href, children }) => {
  const hrefLower = href.toLowerCase();
  const pathname = usePathname();

  const style = pathname.startsWith(`/${hrefLower}`);

  return (
    <li className="sm:h-full py-5 sm:py-0">
      <Link
        className={`sm:text-xs hover:text-white h-full flex items-center lg:border-t-2 lg:border-b-0 sm:border-b-2 ${
          style ? activeLink[hrefLower] : "border-transparent"
        }`}
        href={`/${hrefLower}/overview`}
      >
        <span
          className={`sm:hidden border-8 rounded-full mr-6 ${activeLink[hrefLower]}`}
        ></span>
        {children}
        <Image className="sm:hidden ml-auto" src={Arrow} alt="arrow icon" />
      </Link>
    </li>
  );
};

export default Navlink;
