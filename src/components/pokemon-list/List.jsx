import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiClient from '../../api';

function List() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await apiClient.get('/pokemon?limit=151');
        setPokemonList(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Pokemon List</h1>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="text-center">#</th>
            <th scope="col" colSpan="3" className="text-center">Pokemons</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.reduce((rows, pokemon, index) => {
            if (index % 3 === 0) rows.push([]);
            rows[rows.length - 1].push(pokemon);
            return rows;
          }, []).map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th scope="row" className="text-center">{rowIndex + 1}</th>
              {row.map((pokemon, colIndex) => (
                <td key={colIndex} className="text-center">
                  <Link to={`/pokemon/${3 * rowIndex + colIndex + 1}`} className="text-decoration-none text-primary">
                    {pokemon.name}
                  </Link>
                </td>
              ))}
              {Array.from({ length: 3 - row.length }).map((_, i) => (
                <td key={`empty-${i}`} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
