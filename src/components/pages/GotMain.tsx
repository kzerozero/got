import { useState, useEffect } from "react";
import { IGotCharacter, TInputChangeEventHandler } from "../../gotTypes";
import { Character } from "../Character";
import { Filter } from "../Filter";
import gotService from "../../services/characters";
import { Link } from "react-router-dom";

const GotMain = () => {
  const initialCharacters:IGotCharacter[] = [];
  const [ characters, setCharacters ] = useState(initialCharacters);
  const [ searchName, setSearchName] = useState("");
  const [ showAll, setShowAll] = useState(true); 
  const [ isLoading, setIsLoading ] = useState(true);

  
  const handleSearchChange:TInputChangeEventHandler = (event) => {
    setSearchName(event.target.value);
    if(event.target.value.length > 0 ) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

 const charactersToShow = showAll
   ? characters
   : characters.filter((character) => {
      return character.fullName?.toLowerCase().includes(searchName.toLowerCase()); 
   });

  // TODO: add spinner when loading
  useEffect(() => {
    const addCharacters = async () => {
      try {
        const fetchedCharacters:IGotCharacter[] 
        = await gotService.getAllCharacters();
        setCharacters(fetchedCharacters);
      } catch (error) {
       console.error("Something went wrong, failed to fetch charaters:  ", error);
       // TODO: display error message on screen!
      } 
      finally {
        setIsLoading(false);
      }
    };
    addCharacters();
  }, []);

  return (
    <main className="page main" title="GOT Main Page">
      <h1>Game of Thrones</h1>
      <Filter handleSearchChange={ handleSearchChange }  />

      { // TODO: add spinner
        isLoading && <div className="loader">Loading...</div> 
      }
      <ul className="card-list">
        { charactersToShow?.map((character) =>
          <li key={`got_char_${character.id}`} className="card">
            <Link to={`/details/${character.id}`}>
              <Character character={character} />
            </Link>
          </li>
        )}
      </ul>
    </main>
  );

};
export default GotMain;