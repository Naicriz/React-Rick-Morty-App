function Character({character}) { // Instead of passing in props, we pass in character
    return (
    <div key = {character.id}>
        <h2>{character.name}</h2>
        <img src = {character.image} alt = {character.name} />
    </div>
    );
}
  
export default Character;