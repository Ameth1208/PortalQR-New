import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { NavBar } from "../components/navbar/navbar";
import { Footer } from "~/components/footer/footer";


export default component$(() => {
  return (
    <>
      <NavBar />
      <Slot />
      <Footer />
    </>
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

