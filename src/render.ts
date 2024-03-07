//render
import { combineString } from "./combineString.js";
import { $calcuratorArr } from "./index.js";
import { $output } from "./elements.js";

const render = (result?: number): void => {
  // 등호를 누르기 전에는 모든 입력 값을 보여줌

  let data = combineString($calcuratorArr);
  $output.value = data.join(" ");

  if (result !== undefined) {
    $output.value += ` = ${result}`;
  }
};

export { render };
