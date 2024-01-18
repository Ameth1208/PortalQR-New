import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  // localStorage.removeItem("auth");
  return (
    <>
      <Slot />
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
