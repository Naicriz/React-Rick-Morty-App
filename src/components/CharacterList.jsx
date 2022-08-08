import  { useEffect, useState } from 'react';
import Character from './Character';

function CharacterList() {

    const [character, setCharacter] = useState([]) // Crea un array vacio y lo guarda en el estado character y lo actualiza con el setCharacter.

    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        //console.log(data.results);
        setCharacter(data.results); // Actualiza el estado character con el array de data.results
      }
  
      fetchData();
    }, []); // [] Funcion que se ejecuta al montar el componente. Tambien se puede usar para actualizar el componente al cambiar el estado.

    return (
        <div className = "container bg-danger">  {/* Crea un div con la clase container y el fondo rojo */}
            <div className="row"> {/* Crea un div con la clase row */}
            {character.map(character => { // Recorre el array de character y lo muestra en pantalla.
                return (
                        <div className = "col-md-4" key = {character.id}>
                            <Character character = {character} />
                        </div>
                    );
                }
            )}
            </div>
        </div>
    );
}

export default CharacterList;