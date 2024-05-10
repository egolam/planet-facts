import { getCurrentPlanet } from "@/helper/getData";
import Image from "next/image";

const img = {
  overview: "planet",
  structure: "internal",
  geology: "planet",
};

const PlanetImage = ({ params }) => {
  const filter = getCurrentPlanet(params);
  const imgFilter = filter.images[img[params.planet[1]]];
  const geologyFilter = params.planet[1] === "geology";

  return (
    <div className="relative sm:w-full w-56 h-56 sm:h-full flex items-end justify-center mx-auto sm:mx-auto mt-20 sm:mt-0">
      <Image
        src={imgFilter.slice(8)}
        fill
        className="object-scale-down"
        priority
        alt={params.planet[0] + " image"}
      />
      {geologyFilter && (
        <div className="relative lg:w-40 lg:h-48 sm:w-20 sm:h-24 w-10 h-12">
          <Image
            src={filter.images.geology.slice(8)}
            fill
            className="absolute sm:bottom-10"
            alt={filter.images.geology.slice(9)}
          />
        </div>
      )}
    </div>
  );
};

export default PlanetImage;
