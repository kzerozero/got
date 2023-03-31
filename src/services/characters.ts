import { IGotCharacter, IGotQuote } from "../gotTypes";

const charactersBaseUrl = "https://thronesapi.com/api/v2/Characters";
const quotesBaseUrl = "https://api.gameofthronesquotes.xyz/v1/author/";

const getAllCharacters = async ():Promise<IGotCharacter[]> => {
  try {
    console.log("Service: getAllCharacters");
    const response = await fetch(charactersBaseUrl);
    if(!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    return await response.json();
  } catch(error) {
    console.error(error);
    return([]);
  }
};

const getCharacterById = async (id:string):Promise<IGotCharacter> => {
  console.log("Service: getCharacterById");
  const url = `${charactersBaseUrl}/${id}`;
  const response = await fetch(url);
  return await response.json();
};

const getAllQuotes = async (name:string): Promise <IGotQuote[]> => {
  console.log("Service: getAllquotes");
  const url = `${quotesBaseUrl}${name}/100`; 
  const response = await fetch(url);
  return await response.json();
};

const gotService = {
  getAllCharacters,
  getCharacterById,
  getAllQuotes,
}; 

export default gotService;

