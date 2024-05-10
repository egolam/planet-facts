import { getCurrentPlanet } from "@/helper/getData";
import { Antonio, League_Spartan } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const spartan = League_Spartan({ subsets: ["latin"] });

const Stat = ({ stat, params }) => {
  const filter = getCurrentPlanet(params);
  return (
    <div className="text-white w-full border lg:p-6 p-4 hover:bg-[#393950] flex sm:flex-col">
      <h2
        className={`${spartan.className} lg:text-xs sm:text-[0.5rem] font-bold text-[#838391]`}
      >
        {stat.heading}
      </h2>
      <p
        className={`${antonio.className} font-medium lg:text-[2.5rem] sm:text-[1.5rem] ml-auto sm:ml-0`}
      >
        {filter[stat.value]}
      </p>
    </div>
  );
};

export default Stat;
