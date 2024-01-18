import { component$, useStore, useTask$ } from "@builder.io/qwik";
import { QR } from "~/components/qr/qr";
import { Instructions } from "~/components/instructions/instructions";
import { LoginData, credentials } from "~/data/login.data";

export default component$(() => {
  const credential = useStore(credentials);

  useTask$((): any => {
    if (typeof window !== "undefined") {
      const item = window.localStorage.getItem("auth");

      if (item === null) {
        window.location.href = "/";
        return null;
      }

      const value: LoginData = JSON.parse(item);
      if (
        value.email !== credential.email &&
        value.password !== credential.password
      ) {
        window.location.href = "/";
      }
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
