import { IGotCharacter, IGotQuote } from "../gotTypes";

const BASE_URL=process.env.REACT_APP_BASE_URL;
const BASE_URL_QUOTES=process.env.REACT_APP_BASE_URL_QUOTES;

const getAllCharacters = async ():Promise<IGotCharacter[]> => {
  try {
    console.log("Service: getAllCharacters");
    const response = await fetch(BASE_URL!);
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
  const url = `${BASE_URL}/${id}`;
  const response = await fetch(url);
  return await response.json();
};

const getAllQuotes = async (name:string): Promise <IGotQuote[]> => {
  console.log("Service: getAllquotes");
  const url = `${BASE_URL_QUOTES}/${name}/100`; 
  const response = await fetch(url);
  return await response.json();
};

const gotService = {
  getAllCharacters,
  getCharacterById,
  getAllQuotes,
}; 

export default gotService;

