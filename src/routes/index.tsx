import { component$, useClientEffect$ } from "@builder.io/qwik";

import { Logo } from "~/components/logo/logo";

import { NavBar } from "~/components/navbar/navbar";
import { ContentData } from "~/data/content.data";

export default component$(() => {
  useClientEffect$((): any => {
    try {
      localStorage.removeItem("auth");
    } catch (e) {
      console.error("Error al procesar los datos de autenticación:", e);
    }
  });

  return (
    <>
      <div class={"h-[100vh] m-0 p-0 flex flex-col"}>
        <NavBar login={true} />
        <div
          class={
            "h-full grid grid-cols-2 justify-start justify-items-center items-center"
          }
        >
          <div class="text-start mt-10 p-10 m-10">
            <h1 class="w-full text-start text-5xl font-bold text-black leading-none">
              Crear chatbot <br /> <span class="text-primary">WhatsApp</span>
              <br /> en minutos
            </h1>
            <p class="w-[80%] text-start text-gray-500 mt-4 ">
              Potencia tu negocio con un chatbot personalizado que responde
              automáticamente a preguntas frecuentes y gestiona las
              comunicaciones con eficiencia. Te ayudamos a integrar soluciones
              que se adaptan a tus necesidades, mejorando la interacción con tus
              clientes y la gestión diaria.
            </p>

            <div class={"mt-5"}>
              <a
                target="_blank"
                href={ContentData.link.contact}
                title=""
                class={" bg-primary text-white py-2 px-4 rounded-full"}
              >
                Contactanos
              </a>
            </div>
          </div>
          <Logo width="w-[65%]" />
        </div>
      </div>
    </>
  );
});
