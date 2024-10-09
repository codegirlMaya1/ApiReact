import React, { useEffect, useState } from 'react';
import getMarvelCharacters from './api/marvelApi';

const CharacterDetails = () => {
  const [characters, setCharacters] = useState([]);
  const [hoveredCharacter, setHoveredCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getMarvelCharacters();
      setCharacters(data);
    };
    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Character Details</h1>
      <div>
        {characters.map(character => (
          <div key={character.id} onMouseEnter={() => setHoveredCharacter(character)}>
            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            {hoveredCharacter && hoveredCharacter.id === character.id && (
              <div>
                <h2>{character.name}</h2>
                <p>{character.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={() => { /* Load more characters logic */ }}>Load More Characters</button>
    </div>
  );
};

export default CharacterDetails;