
interface IQuoteProps {
  quote: string;
}

export const Quote = ({ quote }:IQuoteProps) => {
  return(
    <blockquote className="quote">-- {quote} --</blockquote>
  );
};