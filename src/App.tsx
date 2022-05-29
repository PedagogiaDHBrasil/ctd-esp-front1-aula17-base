import ListarPokemons from "./components/ListarPokemons";
import VerPokemon from "./components/VerPokemon";

import "./styles.css";
import BuscarPokemon from "./components/BuscarPokemon";

export default function App() {
  // Precisaremos criar a store, com o estado inicial e configurar o provider para que todos
  // nosso aplicativo tem acesso ao estado Redux

  return (
    <div className="App">
      <h1>Pokédex</h1>
      <div id="caixaDeEntrada">
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <BuscarPokemon />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ListarPokemons />
            <VerPokemon />
          </div>
        </div>
      </div>
    </div>
  );
}
