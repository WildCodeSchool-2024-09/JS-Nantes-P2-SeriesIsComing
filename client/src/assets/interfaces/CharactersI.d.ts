interface CharactersI {
  id: number;
  firstName: string;
  lastName: string | undefined;
  nickname?: string | undefined;
  about?: string;
  description?: string;
  imageUrl: string;
  saison?: string | undefined;
}

export default CharactersI;
