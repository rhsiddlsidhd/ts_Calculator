import { isOperator } from "./operatorBtnHandle.js";

const combineString = ($calcuratorArr: string[]) => {
  return $calcuratorArr.reduce<string[]>((acc, cur, index) => {
    if (isOperator(cur)) {
      //연산자
      acc.push(cur);
    } else {
      //피연산자
      if (index === 0 || isOperator($calcuratorArr[index - 1])) {
        acc.push(cur);
      } else {
        acc[acc.length - 1] += cur;
      }
    }
    return acc;
  }, []);
};

export { combineString };
