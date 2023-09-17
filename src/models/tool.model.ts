import type { Category } from "./category.model";

export interface Tool {
  name: string;
  author: string;
  description: string;
  category: Category;
  url: string;
  imageURL?: string;
  tags: string[];
}
