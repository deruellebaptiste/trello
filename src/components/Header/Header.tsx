import "./Header.scss";
import logo from "./../../utils/images/trello.png";

const Header = () => {
  return (
    <header className="header">
      <img alt="logo" className="logo" src={logo}></img>
    </header>
  );
};

export default Header;
