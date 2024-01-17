import { Slot, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { NavBar } from "~/components/navbar/navbar";




export default component$(() => {
  return (
    <>
      <NavBar />
      <Slot />
      <Footer />
    </>
  );
});


