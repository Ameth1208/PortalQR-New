import { component$, useClientEffect$, useStore } from "@builder.io/qwik";
import { QR } from "~/components/qr/qr";
import { Instructions } from "~/components/instructions/instructions";
import { LoginData, credentials } from "~/data/login.data";

export default component$(() => {
  const credential = useStore(credentials);

  useClientEffect$((): any => {
    try {
      const item = localStorage.getItem("auth");

      if (!item) {
        window.location.href = "/login";
        return;
      }

      const value: LoginData = JSON.parse(item);
      if (
        value.email !== credential.email ||
        value.password !== credential.password
      ) {
        window.location.href = "/";
      }
    } catch (e) {
      console.error("Error al procesar los datos de autenticación:", e);
    }
  });
  return (
    <div class="w-full h-full flex justify-center items-center">
      <div class="max-w-[700px] min-h-[250px] flex flex-col mt-5">
        <QR />
        <Instructions />
      </div>
    </div>
  );
});
