const BuscarPokemon = () => {
  // Não vamos esquecer de adicionar o hook redux para ter acesso ao objeto dispatch

  const onBuscarClick = () => {
    // Aqui devemos despachar uma ação usando o dispatch do gancho redux
    // O ideal seria criar uma action com seu tipo, em um arquivo actions.
  };

  return (
    <div id="buscarPokemon">
      <label>Buscar Pokémon</label>
      <input type="text" placeholder={"Pikachu, Charmander, Ditto, etc"} />
      <button onClick={() => onBuscarClick()}>Buscar</button>
    </div>
  );
};

export default BuscarPokemon;
