import { EvolutionData, EvoChainResult } from "@/models/evolution.model";
import { BACKGROUND_COLOR, TYPE_VARIANTS, BORDER_COLOR } from "@/models/type.model";

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
};

export const getEvoChain = (data: EvolutionData) => {
  let evoChain: EvoChainResult[] = [];
  let evoData = data.chain;

  do {
    let numberOfEvolutions = evoData["evolves_to"].length;

    evoChain.push({
      species_name: evoData.species.name,
      id: evoData.species.url.slice(42, evoData.species.url.length - 1),
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name,
        });
      }
    }

    evoData = evoData["evolves_to"][0];
  } while (!!evoData && evoData.hasOwnProperty("evolves_to"));

  return evoChain;
};

export const getIdNumber = (id: string): string => {
  const pokeId = parseInt(id);
  if (pokeId < 10) {
    return "00" + pokeId.toString();
  } else if (pokeId > 99) {
    return pokeId.toString();
  } else {
    return "0" + pokeId.toString();
  }
};

export function getBackgroundVariant(type: string) {
  if (type === "fire" || type === "fighting" || type === "dragon") {
    return BACKGROUND_COLOR.RED;
  } else if (type === "grass" || type === "bug") {
    return BACKGROUND_COLOR.GREEN;
  } else if (type === "water" || type === "flying" || type === "ice") {
    return BACKGROUND_COLOR.BLUE;
  } else if (type === "psychic" || type === "fairy") {
    return BACKGROUND_COLOR.PINK;
  } else if (type === "electric" || type === "steel") {
    return BACKGROUND_COLOR.YELLOW;
  } else if (type === "ground" || type === "rock" || type === "normal") {
    return BACKGROUND_COLOR.BROWN;
  } else if (type === "poison" || type === "ghost") {
    return BACKGROUND_COLOR.PURPLE;
  } else if (type === "dark") {
    return BACKGROUND_COLOR.GRAY;
  }
}

export function getBorderVariant(type: string) {
  if (type === "fire" || type === "fighting" || type === "dragon") {
    return BORDER_COLOR.RED;
  } else if (type === "grass" || type === "bug") {
    return  BORDER_COLOR.GREEN;
  } else if (type === "water" || type === "flying" || type === "ice") {
    return  BORDER_COLOR.BLUE;
  } else if (type === "psychic" || type === "fairy") {
    return  BORDER_COLOR.PINK;
  } else if (type === "electric" || type === "steel") {
    return  BORDER_COLOR.YELLOW;
  } else if (type === "ground" || type === "rock" || type === "normal") {
    return  BORDER_COLOR.BROWN;
  } else if (type === "poison" || type === "ghost") {
    return  BORDER_COLOR.PURPLE;
  } else if (type === "dark") {
    return  BORDER_COLOR.GRAY;
  }
}

export function getTypeVariant(type: string) {
  if (type === "fire" || type === "fighting" || type === "dragon") {
    return TYPE_VARIANTS.RED;
  } else if (type === "grass" || type === "bug") {
    return TYPE_VARIANTS.GREEN;
  } else if (type === "water" || type === "flying" || type === "ice") {
    return TYPE_VARIANTS.BLUE;
  } else if (type === "psychic" || type === "fairy") {
    return TYPE_VARIANTS.PINK;
  } else if (type === "electric" || type === "steel") {
    return TYPE_VARIANTS.YELLOW;
  } else if (type === "ground" || type === "rock" || type === "normal") {
    return TYPE_VARIANTS.BROWN;
  } else if (type === "poison" || type === "ghost") {
    return TYPE_VARIANTS.PURPLE;
  } else if (type === "dark") {
    return TYPE_VARIANTS.GRAY;
  }
}
