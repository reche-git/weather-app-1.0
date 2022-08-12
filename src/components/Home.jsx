import { useState } from "react";
import style from "../Style/Home.module.css";
import { format } from "date-fns";
import Search from "./Search";
import { Link } from "react-router-dom";
import paperSound from "../utilities/PaperSound.mp3";

const Url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apikey = "&appid=89af68d69357f27f25ca6ba09df381e2";
// https://api.openweathermap.org/data/2.5/weather?q={place name}&appid={API key}
const audio = new Audio(paperSound);
const start = () => {
  audio.play();
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({});
  const [newStyle, setNewStyle] = useState(false);

  const search = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetch(`${Url}${query}&units=metric${apikey}`)
        .then((res) => res.json())
        .then(
          (result) => {
            setData(result);
            setQuery("");
            setNewStyle(true);
          },
          [e]
        );
      setNewStyle(false);
    }
  };

  return (
    <div>
      <div className={style.card}>
        <Search setQuery={setQuery} query={query} search={search} />
        {typeof data.main === "undefined" ? (
          <div className={style.wellcome}>
            <h1>Weather Now!</h1>
            <p>Type any location in the search box!</p>
          </div>
        ) : (
          <div
            className={!newStyle ? style.city_name : style.city_name_fetch}
            id="weatherDetails"
          >
            <h1>{data.name}</h1>
            <p>
              {data.sys.country}, {format(new Date(), "EEEE dd MMMM yyyy")}
            </p>
            <div className={style.temperature}>
              <p>{data.main.temp.toFixed(1)}ºc</p>
              <div className={style.description}>
                <img
                  alt="icon not found"
                  src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                />
                <h2>
                  {data.weather[0].description.slice(0, 1).toUpperCase() +
                    data.weather[0].description.slice(1)}
                </h2>
              </div>
            </div>
          </div>
        )}
        <div className={style.buttons}>
          <Link to="/about-me" className={style.button2}>
            <button>About me</button>
          </Link>
          <Link to="/libraries-used" className={style.button2}>
            <button
            onClick={start}
            >Libraries used</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
