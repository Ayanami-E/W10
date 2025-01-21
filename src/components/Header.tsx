import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header" data-testid="pg-header">
      <h1>Lorem Ipsum</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><button id="fi">FI</button></li>
          <li><button id="en">EN</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
