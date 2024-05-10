import Link from "next/link";

const tabsBg = {
  mercury: "sm:bg-mercury border-b-mercury",
  venus: "sm:bg-venus border-b-venus",
  earth: "sm:bg-earth border-b-earth",
  mars: "sm:bg-mars border-b-mars",
  jupiter: "sm:bg-jupiter border-b-jupiter",
  saturn: "sm:bg-saturn border-b-saturn",
  uranus: "sm:bg-uranus border-b-uranus",
  neptune: "sm:bg-neptune border-b-neptune",
};

const Tab = ({ tab, i, params }) => {
  const style = params.planet[1] === tab.value;
  const hoverEffect = "hover:" + tabsBg[params.planet[0]];

  return (
    <Link
      href={`/${params.planet[0]}/${tab.value}`}
      className={`sm:border sm:border-[#313148] border-b-2 sm:border-b-1 border-b-transparent flex items-center lg:py-4 sm:py-3 lg:px-7 sm:px-5 font-bold lg:text-xs text-[0.563rem] tracking-widest leading-none text-white/50 hover:text-white sm:text-white ${
        style && tabsBg[params.planet[0]]
      } ${style ? hoverEffect : "sm:hover:bg-[#313148]"}`}
    >
      <span className="hidden sm:inline-block lg:mr-7 mr-3 text-white/50">
        {"0" + (i + 1)}
      </span>
      {tab.heading}
    </Link>
  );
};

export default Tab;
