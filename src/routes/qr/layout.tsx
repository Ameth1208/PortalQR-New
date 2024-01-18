import { Slot, component$ } from "@builder.io/qwik";
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
