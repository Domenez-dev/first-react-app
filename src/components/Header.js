import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <h1>Welcome to My Landing Page</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;