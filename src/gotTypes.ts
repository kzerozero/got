/* Event handler types */
export type TInputChangeEventHandler = React.ChangeEventHandler<HTMLInputElement>
export type TMouseEventHandler = React.MouseEventHandler<HTMLElement>;
export type TMouseEvent = React.MouseEvent; 
export type TSelectEventHandler = React.ChangeEventHandler<HTMLSelectElement>

export type TStatus = "idle" | "loading" | "failed"; 

/* GOT Types */
export interface IGotCharacter  {
  id: number;
  firstName: string;
  lastName?: string;
  fullName?: string;
  title?: string;
  family?: string;
  imageUrl?: string;
  quotes?: string[];
}

export interface IGotQuote {
  sentence: string;
  character?: {slug: string};
}