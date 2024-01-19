import { component$, useClientEffect$, useStore } from "@builder.io/qwik";

// import qr from "./../../assets/bot.qr.png";

export const QR = component$(() => {
  const state = useStore({
    count: 0,
  });

  useClientEffect$(() => {
    setInterval(() => {
      state.count++;
    }, 800);
  });

  return (
    <div class="flex justify-center w-full">
      {/* <img
        class="min-w-[250px] max-w-[300px] aspect-square object-contain"
        src={qr}
        alt="QR"
      /> */}
      <img
        class="min-w-[250px] max-w-[300px] aspect-square object-contain"
        src={"../qr.png?time=" + state.count}
        alt="QR"
      />
    </div>
  );
});
