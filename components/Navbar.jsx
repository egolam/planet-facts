import Link from "next/link";
import Navlink from "./Navlink";
import data from "/data.json";
import { Antonio, League_Spartan } from "next/font/google";
import Hamburger from "@/public/icon-hamburger.svg";
import Image from "next/image";

const antonio = Antonio({ subsets: ["latin"] });
const spartan = League_Spartan({ subsets: ["latin"] });

const Navbar = () => {
  return (
    <header className="z-50 w-full border-b lg:h-[5.25rem] sm:h-[9.875rem] h-[4.25rem] border-white/20 sm:pt-8 lg:pt-0 px-6 sm:px-0">
      <div className="lg:max-w-[90rem] flex lg:flex-row sm:flex-col items-center lg:justify-between lg:mx-auto h-full lg:px-6">
        <Link
          className={`text-white font-medium z-40 text-[1.75rem] leading-none ${antonio.className}`}
          href="/"
        >
          THE PLANETS
        </Link>
        <input
          type="checkbox"
          id="hamburger"
          name="hamburger"
          className="peer sr-only"
        />
        <nav className="z-10 h-full absolute peer-checked:hidden sm:static sm:block top-0 left-0 bg-[#070724] sm:bg-transparent w-full sm:w-auto px-6 sm:px-0">
          <ul
            className={`${spartan.className} mt-20 sm:mt-0 flex flex-col sm:flex-row sm:gap-8 text-[#C1C1C8] font-bold tracking-wide h-full divide-y sm:divide-none divide-white/10`}
          >
            {data.map((planet) => (
              <Navlink key={planet.name} href={planet.name}>
                {planet.name.toUpperCase()}
              </Navlink>
            ))}
          </ul>
        </nav>

        <label
          htmlFor="hamburger"
          className="sm:hidden ml-auto z-50 cursor-pointer"
        >
          <Image src={Hamburger} alt="stack of 3 lines" />
        </label>
      </div>
    </header>
  );
};

export default Navbar;
