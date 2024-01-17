import { component$ } from "@builder.io/qwik";
import { QR } from "~/components/qr/qr";
import { Instructions } from "~/components/instructions/instructions";


export default component$(() => {

  return (

    <div class="w-full h-full flex justify-center items-center">
      <div class="max-w-[700px] min-h-[250px] flex flex-col mt-[10vh]">
        <QR />
        <Instructions />
      </div>

    </div>
  );
});

