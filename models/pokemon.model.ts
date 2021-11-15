import { EvoChainResult } from "@/models/evolution.model";

export interface PokemonIndexProps {
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface PokemonDataProps {
  id: number;
  name: string;
  base_experience: string;
  height: string;
  is_default: boolean;
  order: string;
  weight: string;
  abilities: Abilities[];
  forms: BasicForm[];
  game_indices: GameIndices[];
  held_items: HeldItems[];
  location_area_encounters: string;
  moves: Moves[];
  species: BasicForm;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
}

export interface Abilities {
  is_hidden: boolean;
  slot: number;
  ability: BasicForm;
}

export interface BasicForm {
  name: string;
  url: string;
}

export interface GameIndices {
  game_index: number;
  version: BasicForm;
}

export interface HeldItems {
  item: BasicForm;
  version_details: VersionDetails[];
}

export interface VersionDetails {
  rarity: number;
  version: BasicForm;
}

export interface Moves {
  move: BasicForm;
}

export interface Sprites {
  back_female: string;
  back_shiny_female: string;
  back_default: string;
  front_female: string;
  front_shiny_female: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: BasicForm;
}

export interface Types {
  slot: string;
  type: BasicForm;
}
