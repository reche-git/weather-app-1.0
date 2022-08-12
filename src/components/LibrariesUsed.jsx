import style from "../Style/LibrariesUsed.module.css";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

export default function LibrariesUsed() {
  return (
    <>
      <Layout />
      <div className={style.card}>
        <div className={style.libraries_container}>
          <div className={style.librarie}>
            <div className={style.librarie_content}>
              <h1
                style={{
                  margin: "-2px 0 0 5px",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Date-fns
              </h1>
              <p
                style={{
                  lineHeight: "190%",
                  marginTop: "31px",
                  marginLeft: "10px",
                  fontStyle: "italic",
                }}
              >
                Provides a toolset for manipulating JavaScript dates in a
                browser & Node.js.
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/date-fns/date-fns"
                >
                  <AiFillGithub style={{ color: "black" }} />
                </a>
              </p>
            </div>
          </div>
          <div className={style.librarie}>
            <div className={style.librarie_content}>
              <h1
                style={{
                  margin: "2px 0 0 5px",
                  lineHeight: "96%",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                React Router
              </h1>
              <p
                style={{
                  lineHeight: "188%",
                  marginTop: "4px",
                  marginLeft: "10px",
                  fontStyle: "italic",
                }}
              >
                Lightweight, fully-featured routing library for the React
                JavaScript library.
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/remix-run/react-router"
                >
                  <AiFillGithub style={{ color: "black" }} />
                </a>
              </p>
            </div>
          </div>
          <div className={style.librarie}>
            <div className={style.librarie_content}>
              <h1
                style={{
                  margin: "2px 0 0 5px",
                  lineHeight: "95%",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                React Icons
              </h1>
              <p
                style={{
                  lineHeight: "190%",
                  marginTop: "4px",
                  marginLeft: "8px",
                  fontStyle: "italic",
                }}
              >
                Include popular icons in your React projects easily with
                react-icons.
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/react-icons/react-icons"
                >
                  <AiFillGithub style={{ color: "black" }} />
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className={style.buttons}>
          <Link to="/" className={style.button2}>
            <button>Home</button>
          </Link>
          <Link to="/about-me" className={style.button2}>
            <button>About me</button>
          </Link>
        </div>
      </div>
    </>
  );
}
