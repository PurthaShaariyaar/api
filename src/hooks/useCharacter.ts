import { useQuery, gql } from '@apollo/client'

interface Episode {
  name: string;
  episode: string
}

interface Character {
  id: string;
  name: string;
  image: string;
  episode: Episode[];
}

interface CharacterData {
  character: Character;
}

interface CharacterVariables {
  id: string
}

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      episode {
        name
        episode
      }
    }
  }
`;

const useCharacter = (id: string) => {

  const { loading, error, data } = useQuery<CharacterData, CharacterVariables>(GET_CHARACTER, {
    variables: {
      id
    }
  });

  return {
    loading,
    error,
    data
  }
}

export default useCharacter;
