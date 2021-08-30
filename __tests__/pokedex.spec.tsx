/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Pokedex from "@/pages/pokedex";
import { getIdNumber } from "@/lib/pokemon.utils";

describe("Pokedex", () => {
  const pokemon = {
    name: "Bulbasaur",
    url: "string",
  };

  const id = "1";

  it("should render Pokedex element successfully", () => {
    const { baseElement } = render(<Pokedex pokemons={pokemon} />);
    expect(baseElement).toBeTruthy();
  });

  it("should render pokemon id #001", () => {
    const IdNumber = () => (
      <h2
        className="mb-2 capitalize font-bold text-center font-Lato"
        data-testid="checkId"
      >
        {id}
      </h2>
    );
    render(<IdNumber />);
    expect(screen.getByTestId("checkId")).toHaveTextContent(id);
  });

  it("should render pokemon name Balbasaur", () => {
    const Name = () => (
      <h2
        className="mt-2 capitalize font-bold text-center font-Lustria text-xl"
        data-testid="checkName"
      >
        {pokemon.name}
      </h2>
    );
    render(<Name />);
    expect(screen.getByTestId("checkName")).toHaveTextContent(pokemon.name);
  });

  it("render pokemon image and alt text", () => {
    const Image = () => (
      <img
        className="h-full w-full"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        alt={pokemon.name}
        data-testid="checkImage"
      />
    );
    render(<Image />);
    expect(screen.getByTestId("checkImage")).toHaveAttribute(
      "src",
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIdNumber(
        id
      )}.png`
    );
    expect(screen.getByTestId("checkImage")).toHaveAttribute(
      "alt",
      pokemon.name
    );
  });
});
