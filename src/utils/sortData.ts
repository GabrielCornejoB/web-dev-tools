import type { Tool } from "../models/tool.model";

export function sortTools(data: Tool[]): Tool[] {
  const categories: Record<string, Tool[]> = {
    icons: [],
    fonts: [],
    illustrations: [],
    colors: [],
    libraries: [],
    generators: [],
    other: [],
  };

  data.forEach((obj) => {
    categories[obj.category].push(obj);
  });

  const orderedTools: Tool[] = [];
  for (const category in categories) {
    orderedTools.push(...categories[category].slice(0, 2));
  }

  orderedTools.sort(() => Math.random() - 0.5);

  const disorderedTools: Tool[] = data.filter(
    (tool) => !orderedTools.includes(tool),
  );
  disorderedTools.sort(() => Math.random() - 0.5);

  return [...orderedTools, ...disorderedTools];
}
