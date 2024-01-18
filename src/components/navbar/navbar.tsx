import { NavLink, NavLinkIcon } from "../navlink/navlink";
import { routesNavBar } from "~/data/navbarQR";
import { Discord, UserBold } from "../icons/icons";
import { Logo } from "../logo/logo";
import { component$ } from "@builder.io/qwik";

import "./navbar.css";

export const NavBar = component$(
  (props: { mobile?: boolean; login?: boolean }) => {

    const linkPages = "https://bot-whatsapp.netlify.app/";
    const ContentNav = () => {
      return (
        <>
          <div class={"grid grid-flow-col"}>
            {!props.login &&
              routesNavBar.map((route) => (
                <NavLink
                  text={route.text}
                  link={route.link}
                  icon={route.icon}
                />
              ))}
          </div>
          {props.login ? (
            <NavLinkIcon text="Login" link="/login" icon={<UserBold />} />
          ) : (
            <NavLinkIcon text="Discord" link="https://discord.com/channels/915193197645402142/1079681562074951750" icon={<Discord />} external={true} />
          )}
        </>
      );
    };

    return (
      <nav
        class={`${props.login
          ? "flex w-full justify-between items-center pr-10 pl-10 pt-3"
          : "navbar"
          }   pb-3 border-b border-gray-100 `}
      >
        <div>
          <a
            class={
              "text-decoration-none flex justify-center items-center p-1 gap-2"
            }
            onClick$={() => (window.location.href = "/")}
            title="home"
          >
            <Logo />
            <h1 class={"text-base font-semibold m-0"}>Chat Bot</h1>
          </a>
        </div>
        <ContentNav />
      </nav>
    );
  }
);
