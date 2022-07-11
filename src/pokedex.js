import { Pokecard } from "./pokecard";

/** takes an array of pokemon and returns html card for each pokemon*/
function Pokedex({ pokemons }) {


  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemons.map(p => {Pokecard(p)})}


      </div>
    </div>
  )
};

export default Pokedex;
