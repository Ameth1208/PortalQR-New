
import { NavLink, NavLinkIcon } from "../navlink/navlink";
import "./navbar.css";
import logo from "./../../assets/logo.svg";
import { Course, Discord, Documetation, Github, Youtube } from "../icons/icons";




export const NavBar = (() => {

  const linkPages = "https://bot-whatsapp.netlify.app/";

  return (
    <nav class={"navbar"}>
      <div class="logo">
        <a href={`${linkPages}`} target="_blank" title="bot-whatsapp">
          <img src={logo} />
          <h1>Chat Bot</h1>
        </a>
      </div>
      <div class={"nav-links"}>
        <NavLink text="Docs" link="https://bot-whatsapp.netlify.app/docs/" icon={<Documetation />} />
        <NavLink text="GitHub" link="https://github.com/codigoencasa/bot-whatsapp" icon={<Github />} />
        <NavLink text="Cursos" link="https://app.codigoencasa.com/courses" icon={<Course />} />
        <NavLink text="Tutorial" link="https://www.youtube.com/watch?v=22jiE2Z3XGM" icon={<Youtube />} />

      </div>
      <div class={"nav-links"}>
        <NavLinkIcon text="642" link="https://app.codigoencasa.com/courses" icon={<Discord />} />
      </div>
    </nav>
  );
});



