import { CardData } from "./data";

export const CardScreen = {
  render: () => {
    return `
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
    ${CardData.map(
      (_i) => `
        <div class="col-span-1 space-y-3">
          <h3 class="text-sm">${_i.name}</h3>
          <img src="${_i.imageUrl}" class="w-[300px] object-cover h-[400px]" />
        </div>
    `
    ).join("")}
    </div>
    `;
  },
};
