import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const CharacterDetails = styled.main`
  margin: 1rem;
`;

const CharacterDetailsText = styled.div`
  padding: 1.5rem;
`;

const CharacterDetailsFrame = styled.div`
  max-width: 80rem;
  background-color: black;
  color: var(--ricky-and-morty-text-color);
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: var(--boxshadow-grey);
`;

export default function Character() {
  const { query } = useRouter();
  const { characterId } = query;
  const [characterInfo, setCharacterInfo] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (characterId) {
      fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then((response) => response.json())
        .then((data) => {
          setCharacterInfo(data);
          setLoaded(true);
        });
    }
  }, [characterId]);

  if (loaded) {
    return (
      <CharacterDetails>
        <CharacterDetailsFrame>
          <Image
            src={characterInfo.image}
            alt={`Picture of ${characterInfo.name}`}
            width='200'
            height='200'
          />
          <CharacterDetailsText>
            <h2>{characterInfo.name}</h2>
            <h3>First appeared in episode 0</h3>
            <h3>Gender: {characterInfo.gender}</h3>
            <h3>Species: {characterInfo.species}</h3>
            <h4>Origin: {characterInfo.origin.name}</h4>
            <p>{characterInfo.type}</p>
            <p>Last seen in {characterInfo.location.name}</p>
          </CharacterDetailsText>
        </CharacterDetailsFrame>
      </CharacterDetails>
    );
  } else {
    return <h1>Loading data...</h1>;
  }
}
