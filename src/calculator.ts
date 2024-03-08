import { isOperator } from "./operatorBtnHandle.js";

const calculator = (postfixExpression: string[]) => {
  let stack: number[] = [];

  for (let i = 0; i < postfixExpression.length; i++) {
    let token = postfixExpression[i];

    if (!isOperator(token)) {
      // 피연산자면 스택에 push
      stack.push(Number(token));
    } else {
      let num2 = stack.pop()!;
      let num1 = stack.pop()!;
      if (num1 === undefined) {
        num1 = num2;
      }
      switch (token) {
        case "+":
          stack.push(num1 + num2);
          break;
        case "-":
          stack.push(num1 - num2);
          break;
        case "*":
          stack.push(num1 * num2);
          break;
        case "/":
          stack.push(num1 / num2);
          break;
      }
    }
  }

  return stack[0];
};

export { calculator };

/**
 * 후위표기법으로 된 postfixExpression  계산
 * for문을 돌아서 피연사자일 경우 stack 으로 저장
 * 연산자일 경우 stack에서 피 연산자 꺼내서 계산
 */
