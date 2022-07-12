/**takes in Pokemon {exp,id,name, and type} and returns pokemon card html
 *   */

function Pokecard({ name, id, experience, type }) {
  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <div>{name}</div>
      <div><img src={pokeImage} alt={name} /></div>
      <div>type: {type}</div>
      <div>EXP: {experience}</div>
    </div>
  );

}
export { Pokecard };
