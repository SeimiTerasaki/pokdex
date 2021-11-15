import Link from "next/link";

import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/variants.utils";

export default function Index() {
  return (
    <Layout title="Welcome | Pokedex">
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{
          enter: { transition: { staggerChildren: 0.1 } },
        }}
        className="w-full pt-20"
      >
        <motion.div
          variants={cardVariants}
          className="relative image-container"
        >
          <img
            className="absolute top-0 left-0 z-10 hidden h-xs md:block"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png"
            alt="Arcanine"
          />
          <img
            className="absolute top-0 left-32 z-10 hidden xl:block"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png"
            alt="Ryhorn"
          />
          <img
            className="absolute top-0 left-64 z-10 hidden xl:block"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
            alt="Pikachu"
          />
          <img
            className="absolute top-0 bottom-0 inset-x-0 mx-auto z-40"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png"
            alt="Eevee"
          />
          <img
            className="absolute top-0 right-64 z-30 hidden xl:block"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png"
            alt="Kadabra"
          />
          <img
            className="absolute top-0 right-32 z-20 hidden xl:block"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png"
            alt="Rapidash"
          />
          <img
            className="absolute top-0 right-0 z-10 hidden h-xs md:block"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
            alt="Mewtwo"
          />
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="relative text-center mt-80 w-full z-50"
        >
          <Link href="/pokedex">
            <a
              data-cy="pokedex-nav"
              className="font-Lustria font-seimibold text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded items-center">
              Click to Start
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </Layout>
  );
}
