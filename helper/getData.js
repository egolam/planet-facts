import data from "/data.json";

export function getCurrentPlanet(params) {
  const currentPlanet = params.planet[0].toLowerCase();
  const filter = data.filter(
    (pln) => pln.name.toLowerCase() === currentPlanet
  )[0];

  return filter;
}
