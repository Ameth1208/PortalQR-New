import {
  Course,
  Documetation,
  Github,
  Youtube,
} from "~/components/icons/icons";
import NavLinkProps from "~/interface/NavLink";

export const routesNavBar: NavLinkProps[] = [
  {
    icon: <Documetation />,
    text: "Docs",
    link: "https://bot-whatsapp.netlify.app/docs/",
  },
  {
    icon: <Github />,
    text: "GitHub",
    link: "https://github.com/codigoencasa/bot-whatsapp",
  },
  {
    icon: <Course />,
    text: "Cursos",
    link: "https://app.codigoencasa.com/courses",
  },
  {
    icon: <Youtube />,
    text: "Tutorial",
    link: "https://www.youtube.com/watch?v=22jiE2Z3XGM",
  },
];
