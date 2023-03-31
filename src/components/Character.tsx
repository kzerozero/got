import { IGotCharacter } from "../gotTypes";

interface ICharacterProps {
  character: IGotCharacter;
  classes?: string;
  showDetails?: boolean;
}

export const Character = ({ character, classes, showDetails=false }:ICharacterProps) => {
  return (
    <div className="character">
      <h3>{character.firstName} {character.lastName}</h3>
      <div className="image-wrapper">
        <img title={`${character.firstName} ${character.lastName}`}
          alt={`${character.firstName} ${character.lastName}`}
          src={ character.imageUrl } />
      </div>
      {
        showDetails && (
          <section className="character-info">
            <div className="info-item">
              <h4>Title:</h4>
              <span> {character.title}</span>
            </div>
            <div className="info-item">
              <h4>Family:</h4>
              <span>{character.family}</span>
            </div>
          </section>)
      }
    </div>
  );
};