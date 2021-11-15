import React from "react";
import Link from "next/link";
import { getIdNumber } from "@/lib/pokemon.utils";
import { EvoChainResult } from "@/models/evolution.model";

interface EvolutionsProps {
  evolution: EvoChainResult;
}

const EvolutionsTab = ({ evolution }: EvolutionsProps) => {
  return (
    <div className="mx-4">
      <p className="text-2xl pt-2 mb-2 capitalize font-bold">Evolutions:</p>
      <div className="flex flex-wrap -mx-4">
        {evolution instanceof Array &&
          evolution.map((chain) => (
            <div
              className="w-full sm:w-100 md:w-100 lg:w-1/3 xl:w-1/3 p-4 flip-in-hor-bottom"
              key={chain.id}
            >
              <Link href={`/pokedex/${chain.species_name}`}>
                <a
                  data-cy="evo-nav"
                  href="#"
                  className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden text-black"
                >
                  <div className="relative pb-48 overflow-hidden">
                    <img
                      className="absolute inset-0 h-full w-full object-contain p-5"
                      src={`https://img.pokemondb.net/artwork/large/${chain.species_name}.jpg`}
                      alt={chain.species_name}
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="mt-2 mb-2 capitalize font-bold text-center font-Lato">
                      #{getIdNumber(chain.id)}
                    </h2>
                    <h2 className="mt-2 mb-2 capitalize font-bold text-center font-Lustria">
                      {chain.species_name}
                    </h2>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
export default EvolutionsTab;
