import type { CraftBuildingsEnum, ItemsEnum } from "../enums/items.enum";

interface ItemsInOutType {
  itemName: ItemsEnum;
  quantityPerCycle: number;
}

export interface RecipesTypes {
  recipeType: "standard" | "alternate";
  craftBuildings: CraftBuildingsEnum;
  itemsIn: ItemsInOutType[];
  itemsOut: ItemsInOutType[];
  initCycleDuration: number;
}
