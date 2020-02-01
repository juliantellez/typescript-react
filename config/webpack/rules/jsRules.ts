import { Rule } from "webpack";

/**
 * Include ts, tsx, js, and jsx files.
 */
const jsRule: Rule = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  loader: "babel-loader"
};

export default jsRule;
