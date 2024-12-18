import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemon(data);
    };
    getDetail();
  }, [id]);

  if (!pokemon) return <p>Загрузка...</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{pokemon.name}</h2>
      <div className="text-center">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p>Рост: {pokemon.height}</p>
        <p>Вес: {pokemon.weight}</p>
        <p>Способности: {pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <Link to="/" className="btn btn-primary">Назад</Link>
      </div>
    </div>
  );
}

export default Detail;
