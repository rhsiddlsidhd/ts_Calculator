import { isOperator } from "./operatorBtnHandle.js";
const combineString = ($calcuratorArr) => {
    return $calcuratorArr.reduce((acc, cur, index) => {
        if (isOperator(cur)) {
            // 토큰이 연산자인 경우, 결과 배열에 추가
            acc.push(cur);
        }
        else {
            if (index === 0 || isOperator($calcuratorArr[index - 1])) {
                // 첫 번째 토큰이거나 바로 앞 토큰이 연산자인 경우, 결과 배열에 추가
                acc.push(cur);
            }
            else {
                // 바로 앞 토큰이 연산자가 아닌 경우, 결과 배열의 마지막 요소에 토큰 추가
                acc[acc.length - 1] += cur;
            }
        }
        return acc;
    }, []);
};
export { combineString };
