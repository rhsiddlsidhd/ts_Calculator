let $calcuratorArr = [];
/**
 * 변수에 직접 값을 할당하는 리터럴 형식의 코드는
 * 직접 import 하여 사용하면 변수는 읽기 전용이 되어
 * 이는 다른 파일에서 변수의 값을 직접 변경할수가 없다.
 * 하지만 함수를 통해 변수에 값을 할당하는 방식을 사용하면,
 * 함수 내부에서는 수정할 수 있고, 함수를 통해 값을 제어할 수 있다.
 */
const $setCalcurator = () => {
    $calcuratorArr = [];
};
/**
 * 위와 같이 한번만 사용되는(재사용이 필요없는) 함수의 경우,
 * 불필요한 시간동안 메모리를 차지하지 않도록 익명함수로 구현한다면,
 * 정확히 해당 함수가 필요한 위치에서만 해당 함수가 구현되고 사라지면서 메모리를 아낄 수 있게 된다.
 */
export { $calcuratorArr, $setCalcurator };
