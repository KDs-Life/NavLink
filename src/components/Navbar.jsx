import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  let navigate = useNavigate();

  function handleLogin() {
    setTimeout(() => {
      navigate("welcome");
    }, 2000);
  }

  function handleLogout() {
    navigate("goodbye");
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="">Home</NavLink>
        </li>
        <NavLink to="">About Us</NavLink>
        <li>
          <NavLink to="">Profil</NavLink>
        </li>
        <li>
          <NavLink to="">Settings</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
        <li>
        <input type="text" placeholder="Search / Suche..." />
        </li>
        <button onClick={handleLogin}>Log-In</button>
        <button onClick={handleLogout}>Log-Out</button>
      </ul>
    </nav>
  );
}

export default Navbar;
