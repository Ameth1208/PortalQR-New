import { Link } from "@builder.io/qwik-city";
import "./navlink.css";
import NavLinkProps from "~/interface/NavLink";

export const NavLink = (props: NavLinkProps) => {
  return (
    <div class="navlink">
      <div class={"icons"}>{props.icon}</div>
      <a href={props.link} target="_blank" title={props.text}>
        {props.text}
      </a>
    </div>
  );
};

export const NavLinkIcon = (props: NavLinkProps) => {
  return (
    <Link href={props.link} class="navlink" title={props.text}>
      <div class={"view-icons"}>{props.icon}</div>
      <p class={"select-none m-2 font-semibold"}>{props.text}</p>
    </Link>
  );
};
