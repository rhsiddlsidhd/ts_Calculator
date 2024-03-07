const $number = document.querySelectorAll("[class^='number_']");
const $operator = document.querySelectorAll("[class^='operator_']");
const $clear = document.querySelector(".clear") as HTMLInputElement;
const $btnEqual = document.querySelector(".btn_equal") as HTMLInputElement;
const $output = document.querySelector(".output") as HTMLInputElement;

export { $btnEqual, $clear, $number, $operator, $output };
