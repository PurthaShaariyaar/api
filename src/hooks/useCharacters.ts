import { useQuery, gql } from '@apollo/client'

interface Character {
  id: number;
  name: string;
  image: string;
}

interface CharactersData {
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

const useCharacters = () => {

  const { loading, error, data } = useQuery<CharactersData>(GET_CHARACTERS);

  return {
    loading,
    error,
    data
  }
}

export default useCharacters;
