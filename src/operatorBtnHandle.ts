import { $calcuratorArr } from "./index.js";
import { $operator } from "./elements.js";
import { render } from "./render.js";

const isOperator = (value: string): boolean => {
  return ["+", "-", "*", "/", "%"].includes(value);
};

const operator = (value: string): void => {
  // + - * / 4가지 경우
  if (
    $calcuratorArr.length !== 0 &&
    !isOperator($calcuratorArr[$calcuratorArr.length - 1])
  ) {
    $calcuratorArr.push(value);
  }

  render();
};

Array.from($operator).forEach((it) =>
  it.addEventListener("click", (e) =>
    operator((e.target as HTMLInputElement).value)
  )
);

export { isOperator };
