import { Link } from "react-router-dom";
import style from "../Style/Header.module.css"
export default function Header() {
  return (
    <div className={style.container}>
      <Link to="/">
        <h1>Weather Now!</h1>
      </Link>
    </div>
  );
}
