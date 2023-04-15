import typescript from "rollup-plugin-typescript2";
import nodeResolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/vertical-stacked-navigation-card.js",
    format: "es",
  },
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
    terser(),
  ],
};
