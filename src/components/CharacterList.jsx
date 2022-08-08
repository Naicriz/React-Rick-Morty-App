import { useEffect, useState } from 'react';
import Character from './Character';

function NavPage(props) { // Crea un componente NavPage con props.
	return (
		<header className='d-flex justify-content-between align-items-center'> {/* No tiene que ser necesariamente un header, puede ser un div */}
			<p>Page: {props.page}</p>
			<button className='btn btn-primary' onClick={() => props.setPage(props.page + 1)}> {/* Cuando se haga click en el boton, se ejecuta la funcion setPage y se le pasa el valor de la pagina + 1 */}
				Page {props.page + 1} {/* Muestra la pagina + 1 */}
			</button>
		</header>
	);
}

function CharacterList() {

	const [character, setCharacter] = useState([]) // Crea un array vacio y lo guarda en el estado character y lo actualiza con el setCharacter.
	const [loading, setLoading] = useState(true) // Crea un estado loading y lo actualiza con el setLoading.
	const [page, setPage] = useState(1) // Crea un estado page y lo actualiza con el setPage.

	useEffect(() => {
		async function fetchData() {
			//const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page) // Fetch es una funcion que se ejecuta en el backend y devuelve una promesa.');
			const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`) // cambiar ' por ` ---  `${page}` es una interpolacion de variables. Se puede usar para concatenar strings.
			const data = await response.json();
			//console.log(data.results);
			setLoading(false);
			setCharacter(data.results); // Actualiza el estado character con el array de data.results
		}

		fetchData();
	}, [page]); // [] Funcion que se ejecuta al montar el componente. Tambien se puede usar para actualizar el componente al cambiar el estado.

	return (
		<div className="container">  {/* Crea un div con la clase container y el fondo escogido */}

			<NavPage page={page} setPage={setPage}/> {/* Importa el componente NavPage */}

			{loading ? ( // Si el estado loading es true, muestra el siguiente codigo:
				<h1>Loading...</h1>
			) : ( // Si el estado loading es false, muestra el siguiente codigo:
				<div className="row"> {/* Crea un div con la clase row */}
					{character.map(character => { // Recorre el array de character y lo muestra en pantalla.
						return (
							<div className="col-md-4" key={character.id}>
								<Character character={character} />
							</div>
						);
					})}
				</div>
			)}
		<NavPage page={page} setPage={setPage}/>
		</div>
	);
}

export default CharacterList;