import { combineString } from "./combineString.js";
import { $calcuratorArr } from "./index.js";
import { $output } from "./elements.js";

const render = (result?: number): void => {
  if (result !== undefined) {
    // 등호를 누른 후에는 결과만 표시하고 입력값 초기화
    $output.value = `${result}`;
    $calcuratorArr.length = 0;
  } else {
    // 등호를 누르기 전에는 모든 입력 값을 보여줌
    let data = combineString($calcuratorArr);
    $output.value = data.join(" ");
  }
};

export { render };
