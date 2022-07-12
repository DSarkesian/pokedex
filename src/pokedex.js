import { Pokecard } from "./pokecard";

/** takes an array of pokemon and returns html card for each pokemon*/
function Pokedex({ pokemon }) {


  return (
    <div>
      <h1>Pokedex</h1>
      <div>
        {pokemon.map(p =>
          <Pokecard
            name={p.name}
            id={p.id}
            experience={p.experience}
            type={p.type}
          />)}
      </div>
    </div>
  );
};

export default Pokedex;
