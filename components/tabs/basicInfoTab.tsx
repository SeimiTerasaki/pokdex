import React from "react";
import BarGraph from "@/components/barGraph";
import { GiBurningDot } from "react-icons/gi";
import { PokemonDataProps } from "@/models/pokemon.model";

interface BasicInfoProps {
  pokemon: PokemonDataProps;
}

const BasicInfoTab = ({ pokemon }: BasicInfoProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div>
        <p className="text-2xl pt-2 mb-2 capitalize font-bold text-gray-700">
          Height: {pokemon.height}
        </p>
        <p className="text-2xl mt-2 mb-2 capitalize font-bold text-gray-700">
          Weight: {pokemon.weight}
        </p>
        <p className="text-2xl mt-2 mb-2 capitalize font-bold text-gray-700">
          Order: {pokemon.order}
        </p>
        <p className="text-2xl mt-2 mb-2 capitalize font-bold text-gray-700">
          Abilities:
        </p>
        <ol className="">
          {pokemon.abilities.map((ability) => (
            <li className="capitalize" key={ability.ability.name}>
              {ability.ability.name}
            </li>
          ))}
        </ol>
      </div>
      <div className="p-4 mt-4 md:mx-4 bg-white capitalize col-span-1 md:col-span-2">
        <p className="text-2xl mt-2 mb-2 font-bold text-black">Base Stats:</p>
        <BarGraph data={pokemon.stats} />
      </div>
    </div>
  );
};
export default BasicInfoTab;
