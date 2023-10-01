import type { Link } from "../models/link.model";

export const links: Link[] = [
  {
    name: "Web Dev Tools",
    path: "/",
    fillColor: "",
    hoverFillColor: "",
    previousPath: "/about",
    nextPath: "/icons",
  },
  {
    name: "Icons",
    path: "/icons",
    fillColor: "fill-rose-500",
    hoverFillColor: "hover:fill-rose-500",
    description:
      "Welcome to the 'Icons' realm - your gateway to a vast icon library. Explore curated links to top icon resources for all your web development needs. Say goodbye to icon hunting; we've got you covered!",
    previousPath: "/",
    nextPath: "/fonts",
  },
  {
    name: "Fonts",
    path: "/fonts",
    fillColor: "fill-yellow-500",
    hoverFillColor: "hover:fill-yellow-500",
    description:
      "Welcome to the 'Fonts' corner - your font-finding ally. Dive into our curated links to unlock top font resources and streamline your web development projects. With our font-finding shortcut, your designs just got a whole lot more interesting!",
    previousPath: "/icons",
    nextPath: "/illustrations",
  },
  {
    name: "Illustrations",
    path: "/illustrations",
    fillColor: "fill-green-500",
    hoverFillColor: "hover:fill-green-500",
    description:
      "Welcome to the 'Illustrations' terrain - your doorway to visual creativity. Explore our curated links to access top illustration resources, enhancing your web development projects with captivating visual elements. Immerse yourself in a world of artistic expression with these huge collections of illustrations!",
    previousPath: "/fonts",
    nextPath: "/colors",
  },
  {
    name: "Colors",
    path: "/colors",
    fillColor: "fill-indigo-500",
    hoverFillColor: "hover:fill-indigo-500",
    description:
      "Welcome to the 'Colors' hub - your palette playground. Dive into our curated links to access top color resources, infusing your web development projects with vibrant and harmonious shades. Explore a spectrum of creative possibilities with our carefully selected color inspirations!",
    previousPath: "/illustrations",
    nextPath: "/libraries",
  },
  {
    name: "Libraries",
    path: "/libraries",
    fillColor: "fill-sky-500",
    hoverFillColor: "hover:fill-sky-500",
    description:
      "Welcome to the 'Libraries' dimension - your treasure trove of web development resources. Explore our curated links to access top libraries, empowering your projects with dynamic animations, versatile components, and powerful tools. Elevate your web development game with our carefully selected libraries!",
    previousPath: "/colors",
    nextPath: "/generators",
  },
  {
    name: "Generators",
    path: "/generators",
    fillColor: "fill-orange-500",
    hoverFillColor: "hover:fill-orange-500",
    description:
      "Welcome to the 'Generators' domain - your code magic workshop! Explore our curated links to access a variety of generators that provide you with ready-to-use code snippets. Say goodbye to the coding grind - effortlessly enhance your web development projects with copy-and-paste-ready code, and watch your designs come to life in no time!",
    previousPath: "/libraries",
    nextPath: "/other",
  },
  {
    name: "Other Tools",
    path: "/other",
    fillColor: "fill-fuchsia-500",
    hoverFillColor: "hover:fill-fuchsia-500",
    description:
      "Welcome to the 'Other Tools' zone - your hub for a variety of indispensable web development utilities. Explore this collection of versatile resources that cater to a wide range of needs, making your web development process smoother and more efficient. Discover the hidden gems that can elevate your projects to the next level!",
    previousPath: "/generators",
    nextPath: "/about",
  },
];
