import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import { QR } from "~/components/qr/qr";


export default component$(() => {
  return (
    <>
      <main>
        <Header />

        <div class={"qr-section"}>
          <QR />
        </div>
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
