// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export async function getAllPokeData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  const data = await res.json()
  return data;
};

export async function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  const pokeData = await Promise.all(
    poke
  )
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      return pokeData;
    });
};


 
import useSWR from 'swr'
 
const fetcher = (url) => fetch(url).then((res) => res.json())
 
const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const PAGE_LIMIT = 100
 
export default function useFetchPokemon(name) {
  const uri = name ? `${API_URL}/${name}` : `${API_URL}?limit=${PAGE_LIMIT}`
  const { data: result, error } = useSWR(uri, fetcher)
 
  return { result, error }
}
