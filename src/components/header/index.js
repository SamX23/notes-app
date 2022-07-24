import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>Notes</h1>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
