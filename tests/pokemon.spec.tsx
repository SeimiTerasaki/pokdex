/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import Pokemon from "@/pages/pokedex/[id]";
import { getTypeVariant } from "@/lib/pokemon.utils";
import { getIdNumber } from "@/lib/pokemon.utils";
import { pokemonData } from '@/lib/dummyData.utils';

    test('renders Pokemon component', async() => {
      render(<Pokemon {...pokemonData} />);
   
      screen.debug();
      expect(await screen.getByText(pokemonData.pokemon.name)).toBeInTheDocument();
      expect(await screen.getByText(`#${getIdNumber(pokemonData.pokemon.id)}`)).toBeInTheDocument();
      expect(await screen.getByText(`${pokemonData.pokemon.base_experience}`, {exact: false})).toBeInTheDocument();
      expect(await screen.getByText(`${pokemonData.pokemon.order}`, {exact: false})).toBeInTheDocument();
      expect(await screen.getByText(`${pokemonData.pokemon.height}`, {exact: false})).toBeInTheDocument();
      expect(await screen.getByText(`${pokemonData.pokemon.weight}`, {exact: false})).toBeInTheDocument();
    })

  
