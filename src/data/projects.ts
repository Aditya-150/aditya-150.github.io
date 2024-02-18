export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "KubeArmor",
    techs: ["ReactJS", "Docusaurus"],
    link: "https://kubearmor.io/",
  },
  {
    title: "ReelsNReels",
    techs: ["ReactJS", "PostgreSQL", "NodeJS", "ExpressJS", "ChakraUI"],
    link: "https://reelsnreels.com/",
  },
  {
    title: "Keden",
    techs: ["ReactJS, NextJS"],
    link: "https://keden.tech/",
  },
  {
    title: "Travigo",
    techs: ["ReactJS"],
    link: "https://travigoui.vercel.app/",
  },
  {
    title: "TheBatmanWeb",
    techs: ["HTML", "CSS", "JS"],
    link: "https://thebatmanweb.netlify.app/",
  },
];

export default projects;
