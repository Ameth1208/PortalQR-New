import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";


import style from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(style);

  return (
    <div class={"page"}>
      <div class={"qr-section intructions"}>
        <h1>Whatsapp QR</h1>
        <p>Escanee el codigo QR, para darle acceso al bot</p>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "📊 WhatBot QR",
  meta: [
    {
      name: "description",
      content: "📊 WhatBot QR",
    },
  ],
};
