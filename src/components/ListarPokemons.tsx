import { useEffect, useState } from "react";
import ListarPokemonsItem from "./ListarPokemonsItem";
import { buscarPokemons } from "../queries/pokemon.queries";
import { Pokemon } from "../types/pokemon.types";
import { extractPokemonId } from "../services/pokemon.services";

/**
 * Visualizar uma lista de pokemons
 *
 * Ex:
 * <pre>
 *     <ListarPokemons />
 *
 * </pre>
 *
 * @author Digital House
 */
const ListarPokemons = () => {
  const [isLoading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<Pokemon[] | null>(null);

  useEffect(() => {
    buscarPokemons("p").then((data) => {
      setLoading(false);
      setPokemons(data);
    });
  }, []);

  if (isLoading) return <div>Carregando Pokémon...</div>;

  return (
    <div id="listarCategorias">
      {pokemons &&
        pokemons.map((pokemon: Pokemon) => (
          <ListarPokemonsItem
            pokemon={pokemon}
            selecionarPokemon={() => {}}
            key={extractPokemonId(pokemon.url)}
          />
        ))}
    </div>
  );
};

export default ListarPokemons;
