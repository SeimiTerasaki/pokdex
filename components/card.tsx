import React from 'react'
import Link from "next/link";
import { getIdNumber } from "../lib/pokemon.utils";
import { motion } from "framer-motion";

interface CardProps {
  name: string;
  id?: number;
}

export default function Card({name, id}: CardProps) {
  return (
    <>
      <Link href={`pokedex/${name}`}>
        <a href="#"
            data-cy="pokemon-nav"
           className="c-card block bg-transparent rounded-2xl">
          <motion.div
            whileHover={{ scale: 0.9 }}
            className="relative border border-solid rounded-xl border-white"
          >
            <div className="inline-block relative">
              <img
                className="h-full w-full"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getIdNumber(id)}.png`}
                alt={name}
              />
            </div>
            <div className="pb-4">
              <h2 className="mb-2 capitalize font-bold text-center font-Lato">
                #{getIdNumber(id)}
              </h2>
              <h2 className="mt-2 capitalize font-bold text-center font-Lustria text-xl">
                {name}
              </h2>
            </div>
          </motion.div>
        </a>
      </Link>
    </>
  );
};
