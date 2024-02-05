import "./styles.css";
//import { robotoRegular, robotoBold } from './fonts';
import logo from "../../assets/movie.svg";

function Menu() {
  return (
    <>
      <nav>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Explore</li>
          <li>Genre</li>
          <li>News</li>
          <li>Movies</li>
          <li>TV Shows</li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
