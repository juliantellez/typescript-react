import { WebpackArgs, WebpackEnv } from "../types";

const createWebpackEnv = (args: WebpackArgs): WebpackEnv => {
  return {
    ...args,
    NODE_ENV: args.NODE_ENV || "development",
    isProduction: () => args.NODE_ENV === "production",
    isDevelopment: () => args.NODE_ENV === "development"
  };
};

export default createWebpackEnv;
