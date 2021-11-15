/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pokedex from "@/pages/pokedex";
import Card from "@/components/card";
import { getIdNumber } from "@/lib/pokemon.utils";
import {pokemon} from "@/lib/dummyData.utils";

  test('renders Pokedex search bar', async () => {
    render(<Pokedex pokemons={pokemon}/>);
 
    expect(await screen.getByRole('textbox')).toBeInTheDocument();
    expect( await screen.getByRole('button')).toBeInTheDocument();

    userEvent.type(screen.getByPlaceholderText(/Search by name.../i), pokemon.name);
  })

  test('renders Card component', async () => {
    render(<Card name={pokemon.name} id={pokemon.id}/>);
 
    expect(await screen.getByAltText(pokemon.name)).toBeInTheDocument();
    expect(await screen.getByText(`#${getIdNumber(pokemon.id)}`)).toBeInTheDocument();
  })
