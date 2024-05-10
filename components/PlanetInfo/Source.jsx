import { getCurrentPlanet } from "@/helper/getData";
import newTabIcon from "@/public/icon-source.svg";
import Image from "next/image";

const Source = ({ params }) => {
  const filter = getCurrentPlanet(params);

  return (
    <a
      target="_blank"
      href={filter[params.planet[1]].source}
      className="flex items-center text-[#45455A] gap-2 text-xs lg:text-base"
    >
      Source : <span className="text-white/50 underline">Wikipedia</span>
      <Image
        src={newTabIcon}
        className="w-3 h-3 text-white/50"
        alt="new tab icon"
      />
    </a>
  );
};

export default Source;
