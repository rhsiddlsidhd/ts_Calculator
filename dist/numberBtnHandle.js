import { $calcuratorArr } from "./index.js";
import { $number } from "./elements.js";
import { render } from "./render.js";
const numberValue = (value) => {
    $calcuratorArr.push(value);
    render();
};
Array.from($number).forEach((it) => it.addEventListener("click", (e) => {
    numberValue(e.target.value);
}));
