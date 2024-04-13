// vite.config.js
import { comlink } from "vite-plugin-comlink";

export default {
  plugins: [comlink()],
  worker: {
    plugins: () => [comlink()],
  },
};
