import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IGotCharacter, IGotQuote } from "../../gotTypes";
import gotService from "../../services/characters";
import { utils } from "../../utils/gotUtils";
import { Character } from "../Character";
import { Quote } from "../Quote";

const GotDetails = () => {
  const { id } =  useParams(); 
  const initialCharacter:IGotCharacter = { id: -1, firstName: "none"} 

  const [ isLoading, setIsLoading ] = useState(true);
  const [ character, setCharacter ] = useState(initialCharacter);
  const [ showQuotes, setShowQuotes ] = useState(false);
  const [ quotes, setQuotes ] = useState([""]); 

  useEffect(() => {
    const addCharacter = async () => {
      try {
        const fetchedCharacter:IGotCharacter = await gotService.getCharacterById(id || "0");
        setCharacter(fetchedCharacter);
      } catch (error) {
        // TODO: error handling: display error message 
         console.log("FAILED to fetch character ", error); 
      } finally {
        setIsLoading(false);
      }
    };
    addCharacter();
  }, []);

  const addQuotes = async () => {
    try {
      const fetchedQuotes:IGotQuote[] = 
        await gotService.getAllQuotes(
          character.firstName?.toLocaleLowerCase() || "");
      const gotQuotes = fetchedQuotes.map((quote)  => quote.sentence);
      setQuotes(gotQuotes);
    } catch(error) {
      console.log("FAIlED to fetch quotes: ", error);
      setQuotes(["No quotes available for character"]);     
    }
  };

  const showCharacterQuotes = () => {
    if(quotes.length <= 1 ) {
      addQuotes();
    }
    setShowQuotes(true);
  };  

  return(
    <div className="page details">
      <h2>{ character.firstName } { character.lastName } </h2>
      { // TODO: add spinner
        isLoading && <div className="loader">Loading...</div> 
      }
      <Character character={ character } showDetails={ true } />
      { showQuotes 
       ?  (
          <>
            <button className="up" onClick={ () => { setShowQuotes(false)} }>
             Hide Quotes
             <i className="fa fa-chevron-up"></i>
            </button>
            <section className="quotes">
            { quotes.map((quote) => (
              <Quote key={`quote_${utils.getRandomNumber()}`} quote={ quote } />
            ))}
            </section>
          </>) 
        : (<button className="down" onClick={ showCharacterQuotes }>show quotes
             <i className="fa fa-chevron-down"></i>
           </button>)
      }
      {/* TODO: add aliases if possible to find useful API */}
    </div>
  );
};

export default GotDetails