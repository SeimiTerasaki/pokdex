import React, {useEffect, useState} from 'react'
import Layout from "@/components/layout";
import Card from "@/components/card";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/variants.utils";
import { FiSearch } from "react-icons/fi";

export interface PokedexProps {
  pokemons: {
    name: string;
    id: number;
    url: string;
  };
}

export default function Pokedex({ pokemons }: PokedexProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setSearchResult] = useState([]);
  const [display, setDisplay] = useState(pokemons);

  useEffect(()=>{
    const searchResult = pokemons.filter(x => x.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setSearchResult(searchResult)
  }, [searchTerm])

  useEffect(() => {
    if (searchTerm === '') setDisplay(pokemons);
  });

  function handleChange(searchTerm) {
    setSearchTerm(searchTerm);
  }

  function submitSearchTerm() {
    setDisplay(result as any);
    console.log(display);
  }

  return (
    <>
    <div className="text-center z-10 w-full fixed pt-36 pb-12 mx-auto bg-gradient-to-r from-gray-700 via-gray-900 to-black">
    <div className="flex justify-center items-center">
      <div className="relative flex rounded bg-white">
        <input type="text"
                className="h-14 w-96 pr-8 pl-5 rounded z-0 focus:shadow focus:outline-none"
                placeholder="Search by name..."
                id="search"
                name="search"
                onChange={(e) => handleChange(e.target.value)}
                 />
            <button onClick={submitSearchTerm} className="mr-0" id="search-btn">
              <FiSearch className="text-gray-400 z-20 hover:text-gray-500 text-xl cursor-pointer" />
            </button>
      </div>
    </div>
  </div>
    <Layout title="Home | Pokedex">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.1 } },
        }}
        className="pt-36"
      >
        <div className="container mx-auto text-white flex flex-wrap mt-16">
          {display instanceof Array &&
            display.map((pokemon, index) => (
              <motion.div
                variants={cardVariants}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4"
                key={index}
              >
                <Card name={pokemon.name} id={pokemon.id}/>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </Layout>
  </>
  );
}

export const getStaticProps: GetStaticProps<PokedexProps> = async (context) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=248");
    const { results } = await res.json();
    const resultsWithId = results.map(function(value, index){
      return {
        name:value.name,
        id:index+1,
        url:value.url,
      }
    })
    return {
      props: { pokemons: resultsWithId },
    };
  } catch (err) {
    console.error(err);
  }
};
