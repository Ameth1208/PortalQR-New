import { staticAdaptor } from "@builder.io/qwik-city/adaptors/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      // ssr: false,
      ssr: true, //Con testo se mejora el perfoman

      rollupOptions: {
        input: ["@qwik-city-plan"],
      },
    },
    plugins: [
      staticAdaptor({
        origin: "https://yoursite.qwik.dev",
      }),
    ],
  };
});
