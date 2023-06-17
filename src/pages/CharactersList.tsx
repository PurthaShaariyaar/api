import useCharacters from "../hooks/useCharacters";
import { Link } from 'react-router-dom'

function CharacterList() {

  const { loading, error, data } = useCharacters();

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message}</p>

  return data?.characters.results.map(({ id, name, image }) => (
    <Link to={`/${id}`}>
      <h3>{name}</h3>
      <img
        src={`${image}`}
      />
    </Link>
  )) || null;
}

export default CharacterList;
