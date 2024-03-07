import { $calcuratorArr } from "./index.js";
import { render } from "./render.js";
import { $clear } from "./elements.js";

const clear = () => {
  $calcuratorArr.pop();
  render();
};

$clear.addEventListener("click", clear);
