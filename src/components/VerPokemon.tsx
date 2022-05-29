import PropTypes from "prop-types";
import { PokemonWithProps } from "../types/pokemon.types";
import { Sprite } from "../types/sprite.types";

const charmander: PokemonWithProps = {
  id: 4,
  name: "Charmander",
  url: "https://pokeapi.co/api/v2/pokemon/4/",
  sprites: {
    default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    other: {
      home: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
      },
    },
  } as Sprite,
};

const VerPokemon = () => {
  // Pegue o pokemon selecionado do redux usando o hook selector e depois use
  // a api que retorna as informações deste pokemon.
  // Ah, não esqueça de aproveitar uma ferramenta como React Query para facilitar o acesso!

  return charmander ? (
    <div className="verPokemon">
      <h4>Pokemon: {charmander.name}</h4>
      <h5>#{charmander.id}</h5>
      <img src={charmander.sprites.other.home.front_default} />
    </div>
  ) : null;
};

VerPokemon.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

export default VerPokemon;
