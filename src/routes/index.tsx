import { component$ } from "@builder.io/qwik";
import { QR } from "~/components/qr/qr";
import { Instructions } from "~/components/instructions/instructions";

import './index.css'

export default component$(() => {

  return (

    <div class={"container"}>
      <div class={"page-QR"}>
        <QR />
        <Instructions />
      </div>

    </div>
  );
});

