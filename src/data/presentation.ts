type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "adityaprasadmohanty150@gmail.com",
  title: "Hi, I’m Aditya Prasad Mohanty 👋",
  // profile: "/profile.webp",
  description:
    "Namaste, I'm a *frontend developer* who loves *designing* and *developing* awesome user interfaces. Currently, in relationship with *open source*.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/adityaprasad150",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/aditya-prasad-mohanty-6736231a0/",
    },
    {
      label: "Github",
      link: "https://github.com/Aditya-150",
    },
    {
      label: "Behance",
      link: "https://www.behance.net/adityaprasadmohanty",
    },
    {
      label: "Dribble",
      link: "https://dribbble.com/Aditya-150",
    },
  ],
};

export default presentation;
