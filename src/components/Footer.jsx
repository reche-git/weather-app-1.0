import { ImBriefcase } from "react-icons/im";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import style from "../Style/Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <p>
          reche-git Portafolio{" "}
          <a target="_blank" rel="noreferrer" href="https://github.com/reche-git?tab=repositories">
            <AiOutlineArrowRight />
            <ImBriefcase />
            <AiOutlineArrowLeft />
          </a>
        </p>
      </div>
    </footer>
  );
}
