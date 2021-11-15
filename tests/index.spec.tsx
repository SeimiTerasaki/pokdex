/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Index from "@/pages/index";
import '@testing-library/jest-dom/extend-expect'

  test('renders App component', async() => {
    render(<Index />);
    
    expect(await screen.getByText("Seimi's Awesome Pokedex")).toBeInTheDocument();
    expect(await screen.getByText("Click to Start")).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Arcanine" })).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Ryhorn" })).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Pikachu" })).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Eevee" })).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Kadabra" })).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Rapidash" })).toBeInTheDocument();
    expect(await screen.getByRole('img', { name: "Mewtwo" })).toBeInTheDocument();
  });
