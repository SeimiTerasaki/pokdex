/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, within } from "@testing-library/react";
import { toHaveTextContent } from "@testing-library/jest-dom/extend-expect";
import Pokemon from "@/pages/pokedex/[id]";
import { getTypeVariant } from "@/lib/pokemon.utils";
import { getIdNumber } from "@/lib/pokemon.utils";
import { PokemonDataProps } from "@/models/pokemon.model";

describe("Pokemon", () => {
  const basicData: PokemonDataProps = {
    id: "12",
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

  const evolutionData = {
    species_name: "Charmeleon",
    id: "5",
  };

  const pokemonData = {
    pokemon: basicData,
    evolution: evolutionData,
  };

  it("should render successfully", () => {
    const { baseElement } = render(<Pokemon {...pokemonData} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render pokemon name", () => {
    const Name = () => (
      <p
        className="text-2xl -mt-16 capitalize font-bold text-center pb-3 font-Lustria"
        data-testid="checkName"
      >
        {pokemonData.pokemon.name}
      </p>
    );

    render(<Name />);
    expect(screen.getByTestId("checkName")).toHaveTextContent(
      pokemonData.pokemon.name
    );
  });

  it("should render pokemon id", () => {
    const Id = () => (
      <p
        className="text-2xl capitalize font-bold text-center pb-3 font-Lustria"
        data-testid="checkId"
      >
        #{getIdNumber(pokemonData.pokemon.id)}
      </p>
    );

    render(<Id />);
    expect(screen.getByTestId("checkId")).toHaveTextContent(
      pokemonData.pokemon.id
    );
  });

  it("should render pokemon height", () => {
    const Height = () => (
      <p
        className="text-2xl pt-2 mb-2 capitalize font-bold text-gray-700"
        data-testid="checkHeight"
      >
        Height: 11
      </p>
    );

    render(<Height />);
    expect(screen.getByTestId("checkHeight")).toHaveTextContent(
      pokemonData.pokemon.height
    );
  });

  it("should render pokemon weight", () => {
    const Weight = () => (
      <p
        className="text-2xl pt-2 mb-2 capitalize font-bold text-gray-700"
        data-testid="checkWeight"
      >
        Weight: {pokemonData.pokemon.weight}
      </p>
    );
    render(<Weight />);
    expect(screen.getByTestId("checkWeight")).toHaveTextContent(
      pokemonData.pokemon.weight
    );
  });

  it("should render pokemon order", () => {
    const Order = () => (
      <p
        className="text-2xl pt-2 mb-2 capitalize font-bold text-gray-700"
        data-testid="checkOrder"
      >
        Order: {pokemonData.pokemon.order}
      </p>
    );
    render(<Order />);
    expect(screen.getByTestId("checkOrder")).toHaveTextContent(
      pokemonData.pokemon.order
    );
  });

  it("should render pokemon base experience", () => {
    const Experience = () => (
      <p
        className="text-xl mt-2 mb-3 capitalize font-bold text-center font-Lato"
        data-testid="checkBaseExperience"
      >
        Base Experience: {pokemonData.pokemon.base_experience}
      </p>
    );
    render(<Experience />);
    expect(screen.getByTestId("checkBaseExperience")).toHaveTextContent(
      pokemonData.pokemon.base_experience
    );
  });

  it("should render pokemon types", () => {
    const variant = getTypeVariant(pokemonData.pokemon.types[0].type.name);
    const Types = () => (
      <span
        className={`inline-flex items-center justify-center px-3 py-2 text-md font-bold leading-none rounded capitalize ${variant}`}
        data-testid="checkTypes"
      >
        {pokemonData.pokemon.types[0].type.name}
      </span>
    );
    render(<Types />);
    expect(screen.getByTestId("checkTypes")).toHaveTextContent(
      pokemonData.pokemon.types[0].type.name
    );
  });

  it("should render pokemon abilities", () => {
    const Abilities = () => (
      <li className="capitalize" data-testid="checkAbilities">
        {pokemonData.pokemon.abilities[0].ability.name}
      </li>
    );
    render(<Abilities />);
    expect(screen.getByTestId("checkAbilities")).toHaveTextContent(
      pokemonData.pokemon.abilities[0].ability.name
    );
  });

  it("should render pokemon moves", () => {
    const Moves = () => (
      <li className="capitalize" data-testid="checkMoves">
        {pokemonData.pokemon.moves[0].move.name}
      </li>
    );
    render(<Moves />);
    expect(screen.getByTestId("checkMoves")).toHaveTextContent(
      pokemonData.pokemon.moves[0].move.name
    );
  });

  it("should render pokemon evolution name", () => {
    const EvolutionName = () => (
      <h2
        className="mt-2 mb-2 capitalize font-bold text-center font-Lustria"
        data-testid="checkEvolutionName"
      >
        {pokemonData.evolution.species_name}
      </h2>
    );
    render(<EvolutionName />);
    expect(screen.getByTestId("checkEvolutionName")).toHaveTextContent(
      pokemonData.evolution.species_name
    );
  });
  it("should render pokemon evolution id", () => {
    const EvolutionId = () => (
      <h2
        className="mt-2 mb-2 capitalize font-bold text-center font-Lato"
        data-testid="checkEvolutionId"
      >
        #{getIdNumber(pokemonData.evolution.id)}
      </h2>
    );
    render(<EvolutionId />);
    expect(screen.getByTestId("checkEvolutionId")).toHaveTextContent(
      pokemonData.evolution.id
    );
  });
  it("should render evolution pokemon evolution image", () => {
    const EvolutionImage = () => (
      <img
        className="absolute inset-0 h-full w-full object-contain p-5"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png`}
        alt={pokemonData.evolution.species_name}
        data-testid="checkEvolutionImage"
      />
    );
    render(<EvolutionImage />);
    expect(screen.getByTestId("checkEvolutionImage")).toHaveAttribute(
      "src",
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIdNumber(
        pokemonData.evolution.id
      )}.png`
    );
    expect(screen.getByTestId("checkEvolutionImage")).toHaveAttribute(
      "alt",
      pokemonData.evolution.species_name
    );
  });
  it("should render pokemon image and alt text", () => {
    const Image = () => (
      <img
        className="h-full w-full left-50 relative"
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png`}
        alt={pokemonData.pokemon.name}
        data-testid="checkImage"
      />
    );
    render(<Image />);
    expect(screen.getByTestId("checkImage")).toHaveAttribute(
      "src",
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIdNumber(
        pokemonData.pokemon.id
      )}.png`
    );
    expect(screen.getByTestId("checkImage")).toHaveAttribute(
      "alt",
      pokemonData.pokemon.name
    );
  });
});
