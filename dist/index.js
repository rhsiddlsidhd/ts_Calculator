const $number = document.querySelectorAll("[class^='number_']");
const $operator = document.querySelectorAll("[class^='operator_']");
const $clear = document.querySelector(".clear");
const $btnEqual = document.querySelector(".btn_equal");
const $output = document.querySelector(".output");
let numberArrOne = "";
let numberArrTwo = "";
let operatorArr = "";
//number
const numberValue = (value) => {
    operatorArr === "" ? (numberArrOne += value) : (numberArrTwo += value);
    console.log({ numberArrOne });
    console.log({ numberArrTwo });
    render();
};
Array.from($number).forEach((it) => it.addEventListener("click", (e) => {
    numberValue(e.target.value);
}));
//operator
const operator = (value) => {
    // + - * / % 5가지 경우
    operatorArr = value;
    console.log({ operatorArr });
    render();
};
//연산자에게 각자의 이벤트를 줌
Array.from($operator).forEach((it) => it.addEventListener("click", (e) => operator(e.target.value)));
//결과값  btnEqual
const calculator = () => {
    switch (operatorArr) {
        case "+":
            $output.value = (Number(numberArrOne) + Number(numberArrTwo)).toString();
            break;
        case "-":
            $output.value = (Number(numberArrOne) - Number(numberArrTwo)).toString();
            break;
        case "*":
            $output.value = (Number(numberArrOne) * Number(numberArrTwo)).toString();
            break;
        case "/":
            $output.value = (Number(numberArrOne) / Number(numberArrTwo)).toString();
            break;
    }
    numberArrOne = "";
    numberArrTwo = "";
    operatorArr = "";
};
$btnEqual.addEventListener("click", calculator);
//지우기 기능
const clear = () => {
    /**
     * 3가지 조건이 전부 가득차있을때
     * two 에서 하나씩 지우기
     * 2가지 조건이 차있을때는
     * 연산자 지우기
     * 첫번째 조건만 차있을때는
     * one에서 지우기
     */
    if (numberArrTwo !== "") {
        numberArrTwo = numberArrTwo.slice(0, -1);
    }
    else if (operatorArr !== "") {
        operatorArr = "";
    }
    else if (numberArrOne !== "") {
        numberArrOne = numberArrOne.slice(0, -1);
    }
    render();
};
$clear.addEventListener("click", clear);
//render
const render = () => {
    //가장 최근에 눌린 Input값을 보여줘야해 numberArrone / operator / numberArrTwo
    const displayValue = `${numberArrOne} ${operatorArr} ${numberArrTwo}`;
    $output.value = displayValue.trim();
};
export {};
