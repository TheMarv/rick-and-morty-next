import { useRouter } from "next/router";
import styled from "styled-components";

export default function Home() {
  const { query } = useRouter();
  console.log(query);
  return (
    <CharacterDetails>
      <h1>Character with ID!!:{query.slug}</h1>
      <div>
        <img src="${data.image}" alt="picture of ${data.name}" />
        <div class="character__details-text">
          <h2>${data.name}</h2>
          <h3>First appeared in episode ${episodeNum}</h3>
          <h3>Gender: ${data.gender}</h3>
          <h3>Species: ${data.species}</h3>
          <h4>Origin: ${data.origin.name}</h4>
          <p>${data.type}</p>
          <p>Last seen in ${data.location.name}</p>
        </div>
      </div>
    </CharacterDetails>
  );
}

export function fetchCharaterDetails(id = 10) {
  fetch(`https://rickandmortyapi.com/api/character/${query.slug}`)
    .then((response) => response.json())
    .then((data) => {
      charDetailsSection.innerHTML = "";
      const episodeNum = data.episode[0].split("/").pop();

      // const charDetailsElem = document.createElement('div');
      // charDetailsElem.className = 'character__details--frame';
      // charDetailsElem.innerHTML = `
      // <img
      //       src="${data.image}"
      //       alt="picture of ${data.name}"
      //     />
      //     <div class="character__details-text">
      //       <h2>${data.name}</h2>
      //       <h3>First appeared in episode ${episodeNum}</h3>
      //       <h3>Gender: ${data.gender}</h3>
      //       <h3>Species: ${data.species}</h3>
      //       <h4>Origin: ${data.origin.name}</h4>
      //       <p>${data.type}</p>
      //       <p>Last seen in ${data.location.name}</p>
      //       `;
      // charDetailsSection.append(charDetailsElem);
    });
}

const CharacterDetails = styled.main`
  margin: 1rem 1rem;


  div {
  max-width: 80rem;
  background-color: black;
  color: var(--ricky-and-morty-text-color);
  margin: 1rem auto;
  border-radius: 5px;
  box-shadow: var(--boxshadow-grey);
}

img {
  float: left;
  max-width: 50%;
  margin: 0 2rem 1.5rem 0;
}

h2 {
  padding: 1.5rem;
`;
