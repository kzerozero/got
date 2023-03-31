import { Link } from "react-router-dom";

const Navigation = () => {
  return(
    <header>
      <nav>
        <Link to="/">
          <span title="home" className="material-icons">home</span>
        </Link>
      </nav>
    </header>
  );
};
export default Navigation;