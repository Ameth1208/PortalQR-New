import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { BotLogo } from "../icons/bot";
import styles from "./header.css?inline";

export default component$(() => {

  
  const linkPages = "https://amethgalarcio.web.app/";


  useStylesScoped$(styles);
  return (
    <header>
      <div class="logo">
        <a href={`${linkPages}`} target="_blank" title="gamastudio">
          <BotLogo />
        </a>
      </div>
    </header>
  );
});
