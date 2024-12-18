import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiClient from '../../api';

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await apiClient.get(`/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card shadow-lg" style={{ width: '24rem' }}>
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top"
          alt={pokemon.name}
        />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{pokemon.name}</h5>
          <p className="card-text">
            Height: {pokemon.height} <br />
            Weight: {pokemon.weight} <br />
            Abilities: {pokemon.abilities.map(a => a.ability.name).join(', ')}
          </p>
          <Link to="/" className="card-link">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
