import type { Category } from "../models/category.model";

export const getColorFromCategory = (category: Category) => {
  switch (category) {
    case "icons":
      return "bg-rose-500";
    case "illustrations":
      return "bg-green-500";
    case "colors":
      return "bg-indigo-500";
    case "generators":
      return "bg-orange-500";
    case "fonts":
      return "bg-yellow-500";
    case "libraries":
      return "bg-sky-500";
    case "other":
      return "bg-fuchsia-500";
  }
};
