import { $, component$, useStore } from "@builder.io/qwik";

import { Logo } from "~/components/logo/logo";
// import './styles.css'
import { TextInput } from "~/components/text-input/text-input";
import { credentials } from "~/data/login.data";



interface LoginFormState {
  email: string;
  password: string;
}

export default component$(() => {
  const state = useStore<LoginFormState>({
    email: "",
    password: "",
  });

  const credential = useStore(credentials);

  const handleSubmit = $((event: Event) => {
    try {

      event.preventDefault();
      if (
        state.email === credential.email &&
        state.password === credential.password
      ) {


        localStorage.setItem("auth", JSON.stringify(credential));
        window.location.href = "/qr";
      }
    } catch (e) {
      console.log(e);

    }

  });

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div class="relative py-3 sm:max-w-xs sm:mx-auto">
        <div class="px-8 py-6 mt-4 text-left bg-white  rounded-xl shadow-lg">
          <div class="flex flex-col items-center justify-center gap-2">
            <div
              class="w-16 bg-gradient-to-b from-transparent to-[#F8F8F888] border-1 border-custom-gray shadow-custom rounded-xl justify-center items-center flex"
              onClick$={() => (window.location.href = "/")}
            >
              <Logo width="w-full p-3" />
            </div>
            <p class="m-0 text-[16px] font-semibold">Login to your Account</p>
            <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">
              Get started with our app, just start section and enjoy experience.
            </span>
          </div>

          <form onSubmit$={handleSubmit}>
            <div class="mt-4">
              <TextInput
                label="E-mail"
                name="email"
                type="email"
                value={state.email}
                onInput$={(event: InputEvent) => {
                  state.email = (event.target as HTMLInputElement).value;
                }}
              />
              <TextInput
                label="Password"
                name="password"
                type="password"
                value={state.password}
                onInput$={(event: InputEvent) => {
                  state.password = (event.target as HTMLInputElement).value;
                }}
              />
            </div>
            <div class="mt-5">
              <button
                class="py-2 px-4 bg-primary hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                type="submit"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
