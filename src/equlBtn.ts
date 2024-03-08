import { combineString } from "./combineString.js";
import { $calcuratorArr, $setCalcurator } from "./index.js";
import { isOperator } from "./operatorBtnHandle.js";
import { $btnEqual } from "./elements.js";
import { calculator } from "./calculator.js";
import { render } from "./render.js";

//결과값  btnEqual
const btnEqual = (): void => {
  let data = combineString($calcuratorArr);

  //연산자 우선 순위 설정
  const $priority: { [key: string]: number } = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "%": 2,
  };
  let postfixExpression: string[] = [];
  let stack: string[] = [];

  for (let i = 0; i < data.length; i++) {
    let token = data[i];
    //피연산자 후위표현식 push
    if (!isOperator(token)) {
      postfixExpression.push(token);
    } else {
      /**
       * 연산자는 스택을 활용하여 우선순위를 비교하면서 처리
       */
      while (
        stack.length > 0 &&
        $priority[stack[stack.length - 1]] >= $priority[token]
      ) {
        postfixExpression.push(stack.pop()!);
      }
      stack.push(token);
    }
  }

  //stack에 남은 데이터들은 post 뒤로 붙여서 데이터 구성
  postfixExpression = [...postfixExpression, ...stack.reverse()];
  render(calculator(postfixExpression));
  $setCalcurator();
};

$btnEqual.addEventListener("click", btnEqual);

/**
 * 현재 데이터 (let a = ["1","1","+","3","3","*","3"])
 * 해당 데이터를 가지고 후위 표기법으로 변환 (let b = 11 33 3 * +)
 * 후위 표기법으로 변환한 자료를 바탕으로 계산 수식
 *
 */
/**
   * 피연산자는 그대로 out으로 출력
  
  연산자는 stack으로 저장 
  저장 시에 stack에 들어가있는 연산자와 비교하여 우선순위를 고려 해야함  (필자는 ( ) 소괄호가 없음)
  
  우선순위가 높은경우 +  같은경우 = 스택의 연산자를 출력하고 현재 연산자를 스택에 저장
            낮은경우  = 현재 연산자를 스택에 넣음
  
  모든 토큰(수식)을 완료한 후에 스택에 남아잇는 연산자를 모두 출력
   */
