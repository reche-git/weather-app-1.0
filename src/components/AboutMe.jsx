import style from "../Style/AboutMe.module.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { DiHtml5, DiCss3, DiJsBadge, DiReact } from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { ImBriefcase } from "react-icons/im";
import paperSound from "../utilities/PaperSound.mp3";


export default function AboutMe() {
  const audio = new Audio(paperSound);
  const start = () => {
    audio.play();
  };

  return (
    <>
      <Layout />
      <div className={style.card}>
        <div className={style.photoContainer}>
          <div className={style.photo}></div>
          <div className={style.icons}>
            <DiHtml5 />
            <DiCss3 />
            <DiJsBadge />
            <DiReact />
          </div>
        </div>
        <div className={style.presentationContainer}>
          <div className={style.presentation}>
            <h1>Hello, I'm Alan Reche</h1>
            <p>
              Hello, my name is Alan Reche and I am an aspiring React.js
              developer. If you take the time to navigate through my pages, you
              will see examples of my work and a blog about my travel learning
              about developing apps and webpages, along with the different tools
              that I used to get were I am. I would love to find a fulfilling
              career in the developer world, and am doing everything I can to
              reach that goal.<br/><br/>Feel free to learn about me:
            </p>
            <div className="external-Links">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/reche-git?tab=repositories"
              >
                <AiFillGithub
                  style={{ height: "50px", width: "50px", color: "white"}}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/reche-git?tab=repositories"
              >
                <ImBriefcase
                  style={{ height: "50px", width: "50px", color: "white", padding: "0 20px 0 20px" }}
                />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/reche-git?tab=repositories"
              >
                <AiFillGithub
                  style={{ height: "50px", width: "50px", color: "white" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={style.buttons}>
          <Link to="/" className={style.button2}>
            <button>Home</button>
          </Link>
          <Link to="/libraries-used" className={style.button2}>
          <button
            onClick={start}
            >Libraries used</button>
          </Link>
        </div>
      </div>
    </>
  );
}
