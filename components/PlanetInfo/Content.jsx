import { getCurrentPlanet } from "@/helper/getData";

const Content = ({ params }) => {
  const filter = getCurrentPlanet(params)
  return (
    <p className="lg:text-sm text-xs text-white leading-5 tracking-widest flex-1">
      {filter[params.planet[1]].content}
    </p>
  );
};

export default Content;
