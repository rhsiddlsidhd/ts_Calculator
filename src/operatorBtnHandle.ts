import { $calcuratorArr } from "./index.js";
import { $operator } from "./elements.js";
import { render } from "./render.js";

const isOperator = (value: string): boolean => {
  return ["+", "-", "*", "/", "%"].includes(value);
};

//operator
const operator = (value: string): void => {
  // + - * / % 5가지 경우
  if (
    $calcuratorArr.length !== 0 &&
    !isOperator($calcuratorArr[$calcuratorArr.length - 1])
  ) {
    $calcuratorArr.push(value);
  }

  render();
};

/**
 * 연산자가 처음 입력됐을때 $calcuratorArr 들어가는걸 방지
 */

//연산자에게 각자의 이벤트를 줌
Array.from($operator).forEach((it) =>
  it.addEventListener("click", (e) =>
    operator((e.target as HTMLInputElement).value)
  )
);

export { isOperator };
