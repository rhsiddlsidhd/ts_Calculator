import { isOperator } from "./operatorBtnHandle.js";
const combineString = ($calcuratorArr) => {
    return $calcuratorArr.reduce((acc, cur, index) => {
        if (isOperator(cur)) {
            acc.push(cur);
        }
        else {
            if (index === 0 || isOperator($calcuratorArr[index - 1])) {
                acc.push(cur);
            }
            else {
                acc[acc.length - 1] += cur;
            }
        }
        return acc;
    }, []);
};
export { combineString };
