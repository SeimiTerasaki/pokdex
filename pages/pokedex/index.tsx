import Layout from "@/components/layout";
import Card from "@/components/card";
import { GetStaticProps } from "next";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/variants.utils";

export interface PokedexProps {
  pokemons: {
    name: string;
    url: string;
  };
}

export default function Pokedex({ pokemons }: PokedexProps) {
  return (
    <Layout title="Home | Pokedex">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.1 } },
        }}
        className="container mx-auto text-white"
      >
        <div className="flex flex-wrap">
          {pokemons instanceof Array &&
            pokemons.map((pokemon, index: any) => (
              <motion.div
                variants={cardVariants}
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-4"
                key={index}
              >
                <Card pokemon={pokemon} index={index} />
              </motion.div>
            ))}
        </div>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<PokedexProps> = async (context) => {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=248");
    const { results } = await res.json();
    return {
      props: { pokemons: results },
    };
  } catch (err) {
    console.error(err);
  }
};
