import { TInputChangeEventHandler } from "../gotTypes";

interface IFilterProps {
  handleSearchChange: TInputChangeEventHandler;
}

export const Filter = ({ handleSearchChange }:IFilterProps) => {
  return (
    <div className="input-group filter">
      <input type="text" placeholder="character name" 
        onChange={ handleSearchChange } />
      <i className="fa fa-search"></i>
    </div>
  );
};