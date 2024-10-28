import { hello as _hello } from "@waonpad/waonpad-lib";
import { sayYourName } from "@waonpad/waonpad-lib/sub";

export const hello = () => {
  console.log("Hello World");
};

export { _hello, sayYourName };
