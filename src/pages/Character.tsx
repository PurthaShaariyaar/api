import { useParams } from "react-router";
import useCharacter from "../hooks/useCharacter";

function Character() {

  const { id } = useParams<{ id: string }>()

  const { loading, error, data } = useCharacter(id || "");

  console.log({
    loading, error, data
  });

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error</p>;

  if (!data) {
    return null;
  }

  const { character } = data;

  return (
    <div>
      <h1>{character.name}</h1>
      <img
        src={character.image}
      />
      <h2>Episodes</h2>
      <ul>
        {character.episode.map((episode) => (
          <li key={episode.name}>
            {episode.name} - {episode.episode}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Character;
