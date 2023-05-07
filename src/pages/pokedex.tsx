import Head from "next/head";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

type PokemonData = {
  id: string;
  image: string;
  name: string;
};

export default function Pokedex() {
  const [pokemon, setPokemon] = useState<PokemonData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let responseData = await response.json();
        const responsePokemon: PokemonData = {
          id: responseData.id,
          image: responseData.sprites.front_default,
          name: responseData.name,
        };
        setPokemon(responsePokemon);
        setError(null);
      } catch (error: any) {
        setError(error.message);
        setPokemon(undefined);
      } finally {
        setLoading(false);
      }
    };

    getPokemon();
  }, []);

  return (
    <div>
      <Head>
        <title>Pokedex</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar currentPage={"Pokedex"} />
      {loading && <div>Please wait a moment</div>}
      {error && <div>{`There is a problem fetching the data - ${error}`}</div>}
      {pokemon && <div>{pokemon.name}</div>}
    </div>
  );
}
