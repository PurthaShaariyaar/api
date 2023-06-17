import { useQuery, gql } from '@apollo/client'

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharacterData {
  characters: {
    results: Character[];
  }
}

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
}
`;

function CharacterList() {

  const { loading, error, data } = useQuery<CharacterData>(GET_CHARACTERS);

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {error.message}</p>

  return data?.characters.results.map(({ id, name, image }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img
        src={`${image}`}
      />
    </div>
  )) || null;
}

export default CharacterList;
