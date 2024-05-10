import Content from "@/components/PlanetInfo/Content";
import PlanetImage from "@/components/PlanetInfo/PlanetImage";
import Source from "@/components/PlanetInfo/Source";
import Stat from "@/components/PlanetInfo/Stat";
import Tab from "@/components/PlanetInfo/Tab";
import { Stats } from "@/constants/stats";
import { tabs } from "@/constants/tabs";
import { Antonio, League_Spartan } from "next/font/google";

const antonio = Antonio({ subsets: ["latin"] });
const spartan = League_Spartan({ subsets: ["latin"] });

const PlanetDetails = ({ params }) => {
  return (
    <section className="xl:w-[69.375rem] xl:h-[47.25rem] w-full flex flex-col lg:gap-20 gap-6 sm:px-8 lg:px-0 sm:mt-14 lg:mt-0 relative">
      <article className="flex-1 flex flex-col lg:flex-row sm:justify-between gap-9 lg:gap-0">
        <PlanetImage params={params} />
        <div
          className={`lg:max-w-[21.875rem] ${spartan.className} flex lg:flex-col lg:gap-8 sm:gap-16`}
        >
          <div className="flex flex-col gap-6 lg:flex-1 sm:w-1/2 lg:w-full items-center sm:items-baseline text-center sm:text-left px-6 sm:px-0">
            <h1
              className={`font-medium lg:text-[5rem] sm:text-5xl text-[2.5rem] text-white ${antonio.className}`}
            >
              {params.planet[0].toUpperCase()}
            </h1>
            <Content params={params} />
            <Source params={params} />
          </div>

          <div className="absolute h-12 sm:h-auto sm:static top-0 flex sm:flex-col lg:w-full sm:w-1/2 w-full gap-4 content-end justify-center lg:justify-normal sm:pl-10 lg:pl-0  border-b sm:border-none border-white/20">
            {tabs.map((tabItem, i) => (
              <Tab key={tabItem.heading} tab={tabItem} i={i} params={params} />
            ))}
          </div>
        </div>
      </article>
      <article className="flex flex-col sm:flex-row lg:gap-[1.875rem] gap-3 justify-between content-end px-6 sm:px-0">
        {Stats.map((stat) => (
          <Stat key={stat.value} stat={stat} params={params} />
        ))}
      </article>
    </section>
  );
};

export default PlanetDetails;
