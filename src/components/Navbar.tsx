import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-body">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About the Author</a>
        </li>
        <li>
          <a href="#art">Art</a>
        </li>
        <li>
          <a href="#buy">Buy Book</a>
        </li>
      </ul>
    </div>
  );
}
