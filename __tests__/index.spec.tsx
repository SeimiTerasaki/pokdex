/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
import { getIdNumber } from "@/lib/pokemon.utils";

describe("Index", () => {
  const pikachu = {
    name: "Pikachu",
    id: "025",
  };

  const title = "Seimi's Awesome Pokedex";

  it("should render Index element successfully", () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should render title "Seimis Awesome Pokedex"', () => {
    const Title = () => (
      <h3 className="Pokemon-hollow animate-fade-in" data-testid="checkTitle">
        {title}
      </h3>
    );
    render(<Title />);
    expect(screen.getByTestId("checkTitle")).toHaveTextContent(title);
  });

  it("render pokemon image and alt text", () => {
    const Image = () => (
      <img
        className="absolute top-0 left-64 z-10 hidden h-md"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        alt="Pikachu"
        data-testid="checkImage"
      />
    );
    render(<Image />);
    expect(screen.getByTestId("checkImage")).toHaveAttribute(
      "src",
      `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIdNumber(
        pikachu.id
      )}.png`
    );
    expect(screen.getByTestId("checkImage")).toHaveAttribute(
      "alt",
      pikachu.name
    );
  });
});
