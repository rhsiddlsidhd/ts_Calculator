import { isOperator } from "./operatorBtnHandle.js";
const combineString = ($calcuratorArr) => {
    return $calcuratorArr.reduce((acc, cur, index) => {
        if (isOperator(cur)) {
            acc.push(cur);
            console.log("1", acc);
        }
        else {
            if (index === 0 || isOperator($calcuratorArr[index - 1])) {
                acc.push(cur);
                console.log("2", acc);
            }
            else {
                acc[acc.length - 1] += cur;
                console.log("3", acc);
            }
        }
        return acc;
    }, []);
};
export { combineString };
