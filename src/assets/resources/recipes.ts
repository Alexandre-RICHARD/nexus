import { CraftBuildingsEnum, ItemsEnum } from "../../enums/items.enum";
import type { RecipesTypes } from "../../types/items";

export const recipes: RecipesTypes[] = [
  //! Iron_Ingot-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Iron_Ingot-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 7,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 13,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Iron_Ingot-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Copper_Ore,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 6,
  },
  //! Iron_Plate-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Iron_Plate-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 15,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Iron_Plate-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 18,
      },
    ],
    initCycleDuration: 24,
  },
  //! Iron_Rod-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Iron_Rod-Alternate
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 5,
  },
  //! Copper_Ingot-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ore,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Copper_Ingot-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ore,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Copper_Ingot-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ore,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 15,
      },
    ],
    initCycleDuration: 24,
  },
  //! Wire-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Wire-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 30,
      },
    ],
    initCycleDuration: 20,
  },
  // ? Wire-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 9,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Wire-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 8,
      },
    ],
    initCycleDuration: 4,
  },
  //! Cable-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Cable-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 9,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Cable-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 9,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Cable-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 11,
      },
    ],
    initCycleDuration: 24,
  },
  //! Concrete-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Limestone,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Concrete-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Limestone,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 9,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Concrete-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Limestone,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Concrete-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Limestone,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 10,
      },
    ],
    initCycleDuration: 24,
  },
  //! Screw-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Screw-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Screw-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 52,
      },
    ],
    initCycleDuration: 12,
  },
  //! Reinforced_Iron_Plate-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Reinforced_Iron_Plate-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 16,
  },
  // ? Reinforced_Iron_Plate-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 18,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 50,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Reinforced_Iron_Plate-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 20,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 32,
  },
  //! Biomass-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Wood,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Biomass-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Leaves,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 5,
  },
  // ? Biomass-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 100,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Biomass-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Mycelia,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 10,
      },
    ],
    initCycleDuration: 4,
  },
  //! Alien_Protein-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Hog_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Alien_Protein-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Hatcher_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Alien_Protein-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Plasma_Spitter_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Alien_Protein-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Stinger_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Iron_Rebar-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Alien_DNA_Capsule-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_DNA_Capsule,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Caterium_Ingot-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ore,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Caterium_Ingot-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ore,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 5,
  },
  //! Quickwire-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 5,
  },
  // ? Quickwire-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 12,
      },
    ],
    initCycleDuration: 8,
  },
  //! High_Speed_Connector-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 56,
      },
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 16,
  },
  // ? High_Speed_Connector-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 60,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 25,
      },
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 40,
  },
  //! Stun_Rebar-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Stun_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! AI_Limiter-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 20,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.AI_Limiter,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Supercomputer-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.AI_Limiter,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 28,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Supercomputer,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 32,
  },
  // ? Supercomputer-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Cooling_System,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Supercomputer,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 20,
  },
  // ? Supercomputer-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Battery,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 45,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Supercomputer,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 50,
  },
  //! Homing_Rifle_Ammo-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Rifle_Ammo,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Homing_Rifle_Ammo,
        quantityPerCycle: 10,
      },
    ],
    initCycleDuration: 24,
  },
  //! Color_Cartridge-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Flowers_Petals,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Color_Cartridge,
        quantityPerCycle: 10,
      },
    ],
    initCycleDuration: 6,
  },
  //! Fabric-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Mycelia,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fabric,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Fabric-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fabric,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Gas_Nobelisk-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Nobelisk,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Gas_Nobelisk,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Power_Shard-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Blue_Power_Slug,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Power_Shard,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Power_Shard-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Yellow_Power_Slug,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Power_Shard,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Power_Shard-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Purple_Power_Slug,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Power_Shard,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 24,
  },
  //! Crystal_Oscillator-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 36,
      },
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 26,
      },
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 120,
  },
  // ? Crystal_Oscillator-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 7,
      },
      {
        itemName: ItemsEnum.AI_Limiter,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 32,
  },
  //! Quartz_Crystal-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Raw_Quartz,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Quartz_Crystal-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Raw_Quartz,
        quantityPerCycle: 9,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 7,
      },
    ],
    initCycleDuration: 8,
  },
  //! Silica-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Raw_Quartz,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Silica-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Bauxite,
        quantityPerCycle: 12,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 18,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 12,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Silica-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Raw_Quartz,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Limestone,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 7,
      },
    ],
    initCycleDuration: 16,
  },
  //! Shatter_Rebar-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Shatter_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Radio_Control_Unit-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 32,
      },
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 48,
  },
  // ? Radio_Control_Unit-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 60,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 30,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 40,
  },
  // ? Radio_Control_Unit-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Heat_Sink,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 16,
  },
  //! Pulse_Nobelisk-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Nobelisk,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Pulse_Nobelisk,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 60,
  },
  //! Black_Powder-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Black_Powder,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Black_Powder-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Compacted_Coal,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Black_Powder,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 16,
  },
  //! Smokeless_Powder-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Black_Powder,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Smokeless_Powder,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Cluster_Nobelisk-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Nobelisk,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Smokeless_Powder,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cluster_Nobelisk,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 24,
  },
  //! Nobelisk-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Black_Powder,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nobelisk,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Rifle_Ammo-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Smokeless_Powder,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rifle_Ammo,
        quantityPerCycle: 15,
      },
    ],
    initCycleDuration: 12,
  },
  //! Explosive_Rebar-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Smokeless_Powder,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Explosive_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Nuke_Nobelisk-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Nobelisk,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Encased_Uranium_Cell,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Smokeless_Powder,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.AI_Limiter,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nuke_Nobelisk,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 120,
  },
  //! Turbo_Rifle_Ammo-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Rifle_Ammo,
        quantityPerCycle: 25,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbo_Rifle_Ammo,
        quantityPerCycle: 50,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Turbo_Rifle_Ammo-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Rifle_Ammo,
        quantityPerCycle: 25,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Packaged_Turbofuel,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbo_Rifle_Ammo,
        quantityPerCycle: 50,
      },
    ],
    initCycleDuration: 12,
  },
  //! Compacted_Coal-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Compacted_Coal,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 12,
  },
  //! Turbofuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Compacted_Coal,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 16,
  },
  // ? Turbofuel-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Turbofuel,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Turbofuel-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Compacted_Coal,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Turbofuel-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Petroleum_Coke,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 6,
      },
    ],
    initCycleDuration: 8,
  },
  //! Packaged_Turbofuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Turbofuel,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Empty_Canister-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Turbofuel,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbofuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Empty_Canister-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Empty_Canister-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Water,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Empty_Canister-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Oil,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Empty_Canister-Alternate_4
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Fuel,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Empty_Canister-Alternate_5
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Empty_Canister-Alternate_6
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Liquid_Biofuel,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Liquid_Biofuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Empty_Canister-Alternate_7
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Alumina_Solution,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Empty_Canister-Alternate_8
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Sulfuric_Acid,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Empty_Canister-Alternate_9
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Empty_Canister-Alternate_10
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 3,
  },
  //! Copper_Sheet-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Copper_Sheet-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 8,
  },
  //! Rotor-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 25,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 15,
  },
  // ? Rotor-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 52,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 16,
  },
  // ? Rotor-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Modular_Frame-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 60,
  },
  // ? Modular_Frame-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 56,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Modular_Frame-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 60,
  },
  //! Smart_Plating-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Smart_Plating,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 30,
  },
  // ? Smart_Plating-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Smart_Plating,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 24,
  },
  //! Solid_Biofuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Solid_Biofuel,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  //! Steel_Ingot-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Steel_Ingot-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 15,
      },
      {
        itemName: ItemsEnum.Petroleum_Coke,
        quantityPerCycle: 15,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Steel_Ingot-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Steel_Ingot-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Compacted_Coal,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 10,
      },
    ],
    initCycleDuration: 16,
  },
  //! Steel_Beam-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Steel_Pipe-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Versatile_Framework-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Versatile_Framework,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Versatile_Framework-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Versatile_Framework,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 16,
  },
  //! Encased_Industrial_Beam-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Industrial_Beam,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 10,
  },
  // ? Encased_Industrial_Beam-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 7,
      },
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Industrial_Beam,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 15,
  },
  //! Stator-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Stator-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 15,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 15,
  },
  //! Motor-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Motor-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 16,
  },
  // ? Motor-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 6,
      },
    ],
    initCycleDuration: 48,
  },
  //! Automated_Wiring-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 20,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Automated_Wiring,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Automated_Wiring-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 40,
      },
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Automated_Wiring,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 32,
  },
  //! Heavy_Modular_Frame-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 15,
      },
      {
        itemName: ItemsEnum.Encased_Industrial_Beam,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 100,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Modular_Frame,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 30,
  },
  // ? Heavy_Modular_Frame-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Encased_Industrial_Beam,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 104,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Modular_Frame,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 16,
  },
  // ? Heavy_Modular_Frame-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 8,
      },
      {
        itemName: ItemsEnum.Encased_Industrial_Beam,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 36,
      },
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 22,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Modular_Frame,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 64,
  },
  //! Plastic-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Plastic-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Plastic-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 12,
      },
    ],
    initCycleDuration: 12,
  },
  //! Heavy_Oil_Residue-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Heavy_Oil_Residue-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Heavy_Oil_Residue-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Heavy_Oil_Residue-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Heavy_Oil_Residue-Alternate_4
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 13,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Rubber-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Rubber-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Rubber-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 12,
      },
    ],
    initCycleDuration: 12,
  },
  //! Fuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Fuel-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Fuel-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Fuel,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Fuel-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 10,
      },
    ],
    initCycleDuration: 6,
  },
  //! Polymer_Resin-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Polymer_Resin-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Polymer_Resin-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Polymer_Resin,
        quantityPerCycle: 13,
      },
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Petroleum_Coke-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Petroleum_Coke,
        quantityPerCycle: 12,
      },
    ],
    initCycleDuration: 6,
  },
  //! Circuit_Board-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Circuit_Board-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Petroleum_Coke,
        quantityPerCycle: 9,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Circuit_Board-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 11,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 11,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Circuit_Board-Alternate_3
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 30,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 7,
      },
    ],
    initCycleDuration: 48,
  },
  //! Computer-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 9,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 18,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 52,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Computer-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 7,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 28,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 16,
  },
  // ? Computer-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 8,
      },
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 64,
  },
  //! Modular_Engine-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 15,
      },
      {
        itemName: ItemsEnum.Smart_Plating,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Modular_Engine,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 60,
  },
  //! Adaptative_Control_Unit-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Automated_Wiring,
        quantityPerCycle: 15,
      },
      {
        itemName: ItemsEnum.Circuit_Board,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Heavy_Modular_Frame,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Computer,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Adaptative_Control_Unit,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 120,
  },
  //! Packaged_Water-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Water,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  //! Packaged_Oil-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Crude_Oil,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Oil,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 4,
  },
  //! Packaged_Fuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Fuel,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Packaged_Fuel-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Packaged_Water,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Fuel,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  //! Packaged_Heavy_Oil_Residue-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Heavy_Oil_Residue,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 4,
  },
  //! Packaged_Liquid_Biofuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Liquid_Biofuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Liquid_Biofuel,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 3,
  },
  //! Liquid_Biofuel-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Solid_Biofuel,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Liquid_Biofuel,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Liquid_Biofuel-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Liquid_Biofuel,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Liquid_Biofuel,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  //! Gas_Filter-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Fabric,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Gas_Filter,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 8,
  },
  //! Alumina_Solution-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Bauxite,
        quantityPerCycle: 12,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 18,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 12,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Alumina_Solution-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Alumina_Solution,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Alumina_Solution-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Bauxite,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 12,
      },
    ],
    initCycleDuration: 3,
  },
  //! Packaged_Alumina_Solution-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Alumina_Solution,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 1,
  },
  //! Aluminum_Scrap-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Scrap,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Aluminum_Scrap-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 12,
      },
      {
        itemName: ItemsEnum.Petroleum_Coke,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Scrap,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 7,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Aluminum_Scrap-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Bauxite,
        quantityPerCycle: 15,
      },
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Scrap,
        quantityPerCycle: 30,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 6,
  },
  //! Aluminum_Ingot-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Scrap,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  // ? Aluminum_Ingot-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Scrap,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Alclad_Aluminum_Sheet-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alclad_Aluminum_Sheet,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 6,
  },
  //! Aluminum_Casing-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 2,
  },
  // ? Aluminum_Casing-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 15,
      },
    ],
    initCycleDuration: 8,
  },
  //! Iodine_Infused_Filter-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Gas_Filter,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 8,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iodine_Infused_Filter,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 16,
  },
  //! Sulfuric_Acid-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Refinery,
    itemsIn: [
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Sulfuric_Acid-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Sulfuric_Acid,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Sulfuric_Acid-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Uranium,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Uranium_Cell,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 12,
  },
  //! Packaged_Sulfuric_Acid-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Empty_Canister,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Sulfuric_Acid,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 3,
  },
  //! Battery-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 2.5,
      },
      {
        itemName: ItemsEnum.Alumina_Solution,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Battery,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 1.5,
      },
    ],
    initCycleDuration: 3,
  },
  // ? Battery-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Alclad_Aluminum_Sheet,
        quantityPerCycle: 7,
      },
      {
        itemName: ItemsEnum.Plastic,
        quantityPerCycle: 8,
      },
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Battery,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 8,
  },
  //! Assembly_Director_System-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Adaptative_Control_Unit,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Supercomputer,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Assembly_Director_System,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 80,
  },
  //! Encased_Uranium_Cell-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Uranium,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Uranium_Cell,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Encased_Uranium_Cell-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Uranium,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Sulfur,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 15,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Uranium_Cell,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 12,
  },
  //! Electromagnetic_Control_Rod-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.AI_Limiter,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 30,
  },
  // ? Electromagnetic_Control_Rod-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.High_Speed_Connector,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 15,
  },
  //! Uranium_Fuel_Rod-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Encased_Uranium_Cell,
        quantityPerCycle: 50,
      },
      {
        itemName: ItemsEnum.Encased_Industrial_Beam,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Uranium_Fuel_Rod,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 150,
  },
  // ? Uranium_Fuel_Rod-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Encased_Uranium_Cell,
        quantityPerCycle: 100,
      },
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Crystal_Oscillator,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Beacon,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Uranium_Fuel_Rod,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 300,
  },
  //! Magnetic_Field_Generator-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Versatile_Framework,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Battery,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Magnetic_Field_Generator,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 120,
  },
  //! Empty_Fluid_Tank-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Empty_Fluid_Tank,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Empty_Fluid_Tank-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Nitrogen_Gas,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nitrogen_Gas,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Empty_Fluid_Tank,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  // ? Empty_Fluid_Tank-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Nitric_Acid,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Empty_Fluid_Tank,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Packaged_Nitrogen_Gas-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Nitrogen_Gas,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Empty_Fluid_Tank,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Nitrogen_Gas,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 1,
  },
  //! Heat_Sink-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Alclad_Aluminum_Sheet,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heat_Sink,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 8,
  },
  // ? Heat_Sink-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Heat_Sink,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Cooling_System-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Heat_Sink,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Nitrogen_Gas,
        quantityPerCycle: 25,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cooling_System,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 10,
  },
  // ? Cooling_System-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Heat_Sink,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Nitrogen_Gas,
        quantityPerCycle: 24,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cooling_System,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 32,
  },
  //! Fused_Modular_Frame-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Modular_Frame,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 50,
      },
      {
        itemName: ItemsEnum.Nitrogen_Gas,
        quantityPerCycle: 25,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fused_Modular_Frame,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 40,
  },
  // ? Fused_Modular_Frame-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Heavy_Modular_Frame,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Aluminum_Ingot,
        quantityPerCycle: 50,
      },
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 8,
      },
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Fuel,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 20,
  },
  //! Turbo_Motor-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Cooling_System,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Rubber,
        quantityPerCycle: 24,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbo_Motor,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 32,
  },
  // ? Turbo_Motor-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 4,
      },
      {
        itemName: ItemsEnum.Pressure_Conversion_Cube,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Packaged_Nitrogen_Gas,
        quantityPerCycle: 24,
      },
      {
        itemName: ItemsEnum.Stator,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbo_Motor,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 32,
  },
  // ? Turbo_Motor-Alternate_2
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Motor,
        quantityPerCycle: 7,
      },
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 9,
      },
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 7,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Turbo_Motor,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 64,
  },
  //! Thermal_Propulsion_Rocket-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Engine,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Turbo_Motor,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Cooling_System,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Fused_Modular_Frame,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Thermal_Propulsion_Rocket,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 120,
  },
  //! Nitric_Acid-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Nitrogen_Gas,
        quantityPerCycle: 12,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 6,
  },
  // ? Nitric_Acid-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Packaged_Nitric_Acid,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Empty_Fluid_Tank,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Packaged_Nitric_Acid-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Packager,
    itemsIn: [
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Empty_Fluid_Tank,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Packaged_Nitric_Acid,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Non_Fissile_Uranium-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Uranium_Waste,
        quantityPerCycle: 15,
      },
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 10,
      },
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 6,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Non_Fissile_Uranium,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 6,
      },
    ],
    initCycleDuration: 24,
  },
  // ? Non_Fissile_Uranium-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Blender,
    itemsIn: [
      {
        itemName: ItemsEnum.Uranium,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Uranium_Waste,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Nitric_Acid,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Sulfuric_Acid,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Non_Fissile_Uranium,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Water,
        quantityPerCycle: 8,
      },
    ],
    initCycleDuration: 12,
  },
  //! Plutonium_Pellet-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Particle_Accelerator,
    itemsIn: [
      {
        itemName: ItemsEnum.Non_Fissile_Uranium,
        quantityPerCycle: 100,
      },
      {
        itemName: ItemsEnum.Uranium_Waste,
        quantityPerCycle: 25,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plutonium_Pellet,
        quantityPerCycle: 30,
      },
    ],
    initCycleDuration: 60,
  },
  //! Encased_Plutonium_Cell-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Plutonium_Pellet,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Plutonium_Cell,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  // ? Encased_Plutonium_Cell-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Particle_Accelerator,
    itemsIn: [
      {
        itemName: ItemsEnum.Non_Fissile_Uranium,
        quantityPerCycle: 150,
      },
      {
        itemName: ItemsEnum.Aluminum_Casing,
        quantityPerCycle: 20,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Encased_Plutonium_Cell,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 120,
  },
  //! Plutonium_Fuel_Rod-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Manufacturer,
    itemsIn: [
      {
        itemName: ItemsEnum.Encased_Plutonium_Cell,
        quantityPerCycle: 30,
      },
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 18,
      },
      {
        itemName: ItemsEnum.Electromagnetic_Control_Rod,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Heat_Sink,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plutonium_Fuel_Rod,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 240,
  },
  // ? Plutonium_Fuel_Rod-Alternate_1
  {
    recipeType: "alternate",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Encased_Plutonium_Cell,
        quantityPerCycle: 20,
      },
      {
        itemName: ItemsEnum.Pressure_Conversion_Cube,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Plutonium_Fuel_Rod,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 120,
  },
  //! Copper_Powder-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 30,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Powder,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 6,
  },
  //! Pressure_Conversion_Cube-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Fused_Modular_Frame,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Radio_Control_Unit,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Pressure_Conversion_Cube,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 60,
  },
  //! Nuclear_Pasta-Standard
  {
    recipeType: "standard",
    craftBuildings: CraftBuildingsEnum.Particle_Accelerator,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Powder,
        quantityPerCycle: 200,
      },
      {
        itemName: ItemsEnum.Pressure_Conversion_Cube,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Nuclear_Pasta,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 120,
  },
];
