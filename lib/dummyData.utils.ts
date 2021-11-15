import { PokemonDataProps } from "@/models/pokemon.model";

export const pokemon = {
  name: "Bulbasaur",
  id: 1,
  url: "string",
};

export const basicData: PokemonDataProps = {
    id: 12,
    name: "butterfree",
    base_experience: "178",
    height: "11",
    is_default: true,
    order: "16",
    weight: "320",
    abilities: [
      {
        is_hidden: true,
        slot: 3,
        ability: {
          name: "tinted-lens",
          url: "https://pokeapi.co/api/v2/ability/110/",
        },
      },
    ],
    forms: [
      {
        name: "butterfree",
        url: "https://pokeapi.co/api/v2/pokemon-form/12/",
      },
    ],
    game_indices: [
      {
        game_index: 12,
        version: {
          name: "white-2",
          url: "https://pokeapi.co/api/v2/version/22/",
        },
      },
    ],
    held_items: [
      {
        item: {
          name: "silver-powder",
          url: "https://pokeapi.co/api/v2/item/199/",
        },
        version_details: [
          {
            rarity: 5,
            version: {
              name: "y",
              url: "https://pokeapi.co/api/v2/version/24/",
            },
          },
        ],
      },
    ],
    location_area_encounters: "https://pokeapi.co/api/v2/pokemon/12/encounters",
    moves: [
      {
        move: {
          name: "flash",
          url: "https://pokeapi.co/api/v2/move/148/",
        },
      },
    ],
    species: {
      name: "butterfree",
      url: "https://pokeapi.co/api/v2/pokemon-species/12/",
    },
    sprites: {
      back_female: "http://pokeapi.co/media/sprites/pokemon/back/female/12.png",
      back_shiny_female:
        "http://pokeapi.co/media/sprites/pokemon/back/shiny/female/12.png",
      back_default: "http://pokeapi.co/media/sprites/pokemon/back/12.png",
      front_female: "http://pokeapi.co/media/sprites/pokemon/female/12.png",
      front_shiny_female:
        "http://pokeapi.co/media/sprites/pokemon/shiny/female/12.png",
      back_shiny: "http://pokeapi.co/media/sprites/pokemon/back/shiny/12.png",
      front_default: "http://pokeapi.co/media/sprites/pokemon/12.png",
      front_shiny: "http://pokeapi.co/media/sprites/pokemon/shiny/12.png",
    },
    stats: [
      {
        base_stat: 70,
        effort: 0,
        stat: {
          name: "speed",
          url: "https://pokeapi.co/api/v2/stat/6/",
        },
      },
    ],
    types: [
      {
        slot: "2",
        type: {
          name: "flying",
          url: "https://pokeapi.co/api/v2/type/3/",
        },
      },
    ],
  };

  export const evolutionData = {
    species_name: "Charmeleon",
    id: "5",
  };

  export const pokemonData = {
    pokemon: basicData,
    evolution: evolutionData,
  };