function Character({ character }) { // Instead of passing in props, we pass in character
	return (
		<div className="text-center d-5" key={character.id}>
			<h2>{character.name}</h2>
			<img className="img-fluid rounded border border-4 border-info" src={character.image} alt={character.name} />
			<p>{character.origin.name}</p>
		</div>
	);
}

export default Character;