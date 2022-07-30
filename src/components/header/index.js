import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Header = ({ setQuery }) => {
  const handleChange = (e) => {
    e.preventDefault();
    const lowerCase = e.target.value.toLowerCase();

    setQuery(lowerCase);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h1>Notes</h1>
      </div>
      <div className="header__search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
    </header>
  );
};

export default Header;
