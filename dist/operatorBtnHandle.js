//연산자 확인
import { $calcuratorArr, setOperatorArr } from "./index.js";
import { $operator } from "./elements.js";
import { render } from "./render.js";
const isOperator = (value) => {
    return ["+", "-", "*", "/", "%"].includes(value);
};
//operator
const operator = (value) => {
    // + - * / % 5가지 경우
    setOperatorArr(value);
    if ($calcuratorArr.length === 0 ||
        !isOperator($calcuratorArr[$calcuratorArr.length - 1])) {
        $calcuratorArr.push(value);
    }
    render();
};
//연산자에게 각자의 이벤트를 줌
Array.from($operator).forEach((it) => it.addEventListener("click", (e) => operator(e.target.value)));
export { isOperator };
