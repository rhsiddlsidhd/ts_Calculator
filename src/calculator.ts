import { isOperator } from "./operatorBtnHandle.js";

function calculator(item: string[]) {
  let stack: number[] = [];

  /**
   * 후위표기법으로 된 postfixExpression 계산
   * for문을 돌아서 피연사자일 경우 stack 으로 저장
   * 연산자일 경우 stack에서 피 연산자 꺼내서 계산
   */

  for (let i = 0; i < item.length; i++) {
    let token = item[i];

    if (!isOperator(token)) {
      // 피연산자면 스택에 push
      stack.push(Number(token)); // 숫자로 변환하여 스택에 push
    } else {
      let operand2 = stack.pop()!;
      let operand1 = stack.pop()!;

      switch (token) {
        case "+":
          stack.push(operand1 + operand2);
          break;
        case "-":
          stack.push(operand1 - operand2);
          break;
        case "*":
          stack.push(operand1 * operand2);
          break;
        case "/":
          stack.push(operand1 / operand2);
          break;
      }
    }
  }
  // 최종 결과는 스택에 하나의 값으로 남아있음
  return stack[0];
}

export { calculator };
