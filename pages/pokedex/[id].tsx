import React from "react";
import Layout from "@/components/layout";
import Link from "next/link";
import { GetServerSideProps } from "next";
import {
  getEvoChain,
  getIdNumber,
  getBorderVariant,
  getBackgroundVariant,
  getTypeVariant,
} from "@/lib/pokemon.utils";
import { FiChevronLeft } from "react-icons/fi";
import { PokemonDataProps } from "@/models/pokemon.model";
import { EvoChainResult } from "@/models/evolution.model";
import TypeBadge from "@/components/typeBadge";
import BasicInfoTab from "@/components/tabs/basicInfoTab";
import EvolutionsTab from "@/components/tabs/evolutionsTab";
import MovesTab from "@/components/tabs/movesTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { motion } from "framer-motion";
import {
  imageVariants,
  returnVariants,
  tabVariants,
} from "@/lib/variants.utils";

interface PokemonProps {
  pokemon: PokemonDataProps;
  evolution: EvoChainResult;
}

export default function Pokemon({ pokemon, evolution }: PokemonProps) {
  const id = getIdNumber(pokemon.id);
  return (
    <Layout title={`${pokemon.name} | Pokedex`}>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="container mx-auto text-white"
      >
        <motion.div
          variants={returnVariants}
          className="flex items-center md:pb-4 xl:pb-16"
        >
          <Link href="/pokedex">
            <a>
              <p className="cursor-pointer">
                <span className="inline-block align-middle font-Lato">
                  <FiChevronLeft />
                </span>{" "}
                Return home
              </p>
            </a>
          </Link>
        </motion.div>

        <div className="my-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <motion.div
            variants={imageVariants}
            className={`relative border border-solid rounded-2xl pb-6 px-4 ${getBorderVariant(
              pokemon.types[0].type.name
            )}`}
          >
            <div className="inline-block relative right-50 w-300">
              <img
                className="h-full w-full left-50 relative"
                src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
                alt={pokemon.name}
              />
            </div>
            <p className="text-2xl -mt-16 capitalize font-bold text-center pb-3 font-Lustria">
              {pokemon.name}
            </p>
            <p className="text-2xl capitalize font-bold text-center pb-3 font-Lustria">
              #{getIdNumber(pokemon.id)}
            </p>
            <hr
              className={`w-20 mx-auto ${getTypeVariant(
                pokemon.types[0].type.name
              )}`}
            />
            <p className="text-xl mt-2 mb-3 capitalize font-bold text-center font-Lato">
              Base Experience: {pokemon.base_experience}{" "}
            </p>
            <ul className="flex gap-x-4 justify-center">
              {pokemon.types.map((type) => (
                <li className="text-center" key={type.type.name}>
                  <TypeBadge type={type.type.name} />
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={tabVariants}
            className="col-span-1 lg:col-span-2 z-50 font-Lato"
          >
            <Tabs
              selectedTabClassName={`react-tabs__tab--selected ${getBackgroundVariant(
                pokemon.types[0].type.name
              )}`}
              selectedTabPanelClassName={`react-tabs__tab-panel--selected ${getBackgroundVariant(
                pokemon.types[0].type.name
              )}`}
            >
              <TabList>
                <Tab>Basic Info</Tab>
                <Tab>Moves</Tab>
                <Tab>Evolutions</Tab>
              </TabList>
              <TabPanel className={`rounded-b-xl rounded-tr-xl`}>
                <BasicInfoTab pokemon={pokemon} />
              </TabPanel>
              <TabPanel className={`rounded-b-xl rounded-tr-xl`}>
                <MovesTab moves={pokemon.moves} />
              </TabPanel>
              <TabPanel className={`rounded-b-xl rounded-tr-xl`}>
                <EvolutionsTab evolution={evolution} />
              </TabPanel>
            </Tabs>
          </motion.div>
        </div>
      </motion.div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const name = query.id;
  const [pokeRes, speciesRes] = await Promise.all([
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`),
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`),
  ]);
  const [pokemon, species] = await Promise.all([
    pokeRes.json(),
    speciesRes.json(),
  ]);
  const evoRes = await fetch(species.evolution_chain.url);
  const evoJson = await evoRes.json();
  const evolution = getEvoChain(evoJson);

  return { props: { pokemon, evolution } };
};
