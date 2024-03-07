let operatorArr = "";
let $calcuratorArr = [];
// operatorArr 변수를 함수로 대체
/**
 * 변수를 직접 import 하여 사용하면 변수는 읽기 전용이 되어
 * 이는 다른 파일에서 변수의 값을 직접 변경할수가 없다.
 * 하지만 함수를 통해 변수에 값을 할당하는 방식을 사용하면,
 * 함수 내부에서는 수정할 수 있고, 함수를 통해 값을 제어할 수 있다.
 */
const setOperatorArr = (value) => {
    operatorArr = value;
};
// $calcuratorArr = []; 해당 코드도 함수로 할당
const $setCalcurator = () => {
    $calcuratorArr = [];
};
export { operatorArr, $calcuratorArr, setOperatorArr, $setCalcurator };
