const japanCities = [
  {
    name: "Tokyo",
    image: "",
    population: "13.96 million",
    description:
      "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.",
    link: "https://en.wikipedia.org/wiki/Tokyo",
  },
  {
    name: "Yokohama",
    image: "",
    population: "3.79 million",
    description:
      "Yokohama is the second largest city in Japan. Yokohama is the largest port city and hi-tech industrial hub in the Greater Tokyo Area and the Kantō region.",
    link: "https://en.wikipedia.org/wiki/Yokohama",
  },
  {
    name: "Sapporo",
    image: "",
    population: "2.6 million",
    description:
      "Sapporo, capital of the mountainous northern Japanese island of Hokkaido, is famous for its beer, skiing and annual Sapporo Snow Festival featuring enormous ice sculptures.",
    link: "https://en.wikipedia.org/wiki/Sapporo",
  },
];

const japanLandmarks = [
  {
    name: "Tokyo Tower ",
    image: "",
    yearCreated: "1958",
    description:"It is the second-tallest structure in Japan. The structure is an Eiffel Tower-inspired lattice tower that is painted white and international orange to comply with air safety regulations.",
    link: "https://en.wikipedia.org/wiki/Tokyo_Tower",
  },
  {
    name: "Hiroshima Peace Memorial Park",
    image: "",
    yearCreated: "1954",
    description: "It is dedicated to the legacy of Hiroshima as the first city in the world to suffer a nuclear attack at the end of World War II.",
    link: "https://en.wikipedia.org/wiki/Hiroshima_Peace_Memorial_Park",
  },
  {
    name: "National Museum of Nature and Science",
    image: "",
    yearCreated: "1871",
    description: "The National Museum of Nature and Science boasts one of the richest histories of any museum in Japan. It is Japan's only nationally administered comprehensive science museum, and is a central institute for research in natural history and history of science and technology.",
    link: "https://en.wikipedia.org/wiki/National_Museum_of_Nature_and_Science",
  },
];
const japanFamousCitizens = [
  {
    name: "Rui Hachimura",
    image: "",
    occupation:
      "Rui Hachimura is a Japanese professional basketball player for the Washington Wizards of the National Basketball Association. ",
    description:
      " He joined Gonzaga in 2016 as the fifth Japanese-born men's NCAA Division I player and in 2017 became the first Japanese national to play in the NCAA Division I men's tournament. As a sophomore, he earned first-team All-WCC honors. He was named a finalist for the Naismith Player of the Year.",
    link: "https://en.wikipedia.org/wiki/Rui_Hachimura",
  },
  {
    name: "Soichiro Honda",
    image: "",
    occupation: "Soichiro Honda was a Japanese engineer and industrialist.",
    description:
      "In 1948 he started producing a complete motorized bicycle, the Type A, which was driven by the first mass-produced engine designed by Honda, and was sold until 1951. The Type D in 1949 was a true motorcycle with a pressed-steel frame designed and produced by Honda and with a 2-stroke, 98 cc (6.0 cu in) 3 hp (2.2 kW) engine, and became the very first model in the Dream series of motorcycles.",
    link: "https://en.wikipedia.org/wiki/Soichiro_Honda",
  },
  {
    name: "Ichiro Suzuki",
    image: "",
    occupation: "Ichiro Suzuki is a retired professional baseball player",
    description:
      "Suzuki was the first MLB player to enter the Japanese Baseball Hall of Fame.  He achieved 10 consecutive 200-hit seasons, the longest streak by any player in history.",
    link: "https://en.wikipedia.org/wiki/Ichiro_Suzuki",
  },
];

export const getJapanCities = () => {
  return japanCities;
};
export const getJapanLandmarks = () => {
  return japanLandmarks;
};
export const getJapanFamousCitizens = () => {
  return japanFamousCitizens;
};
