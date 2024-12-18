import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const data = await response.json();
      setPokemonList(data.results);
    };
    getList();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Список покемонов</h1>
      <ul className="list-group">
        {pokemonList.map((pokemon, index) => (
          <li key={index} className="list-group-item">
            <Link to={`/pokemon/${index + 1}`} className="text-decoration-none">
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
