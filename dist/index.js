const $number = document.querySelectorAll("[class^='number_']");
const $operator = document.querySelectorAll("[class^='operator_']");
const $clear = document.querySelector(".clear");
const $btnEqual = document.querySelector(".btn_equal");
const $output = document.querySelector(".output");
let operatorArr = "";
let $calcuratorArr = [];
//number
const numberValue = (value) => {
    $calcuratorArr.push(value);
    render();
};
Array.from($number).forEach((it) => it.addEventListener("click", (e) => {
    numberValue(e.target.value);
}));
//연산자 확인
const isOperator = (value) => {
    return ["+", "-", "*", "/", "%"].includes(value);
};
//operator
const operator = (value) => {
    // + - * / % 5가지 경우
    operatorArr = value;
    if ($calcuratorArr.length === 0 ||
        !isOperator($calcuratorArr[$calcuratorArr.length - 1])) {
        $calcuratorArr.push(value);
    }
    render();
};
//연산자에게 각자의 이벤트를 줌
Array.from($operator).forEach((it) => it.addEventListener("click", (e) => operator(e.target.value)));
//문자열 합치기
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
//결과값  btnEqual
const btnEqual = () => {
    let data = combineString($calcuratorArr);
    //연산자 우선 순위 설정
    const $priority = {
        "+": 1,
        "-": 1,
        "*": 2,
        "/": 2,
    };
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
    let postfixExpression = [];
    let stack = [];
    for (let i = 0; i < data.length; i++) {
        let token = data[i];
        //피연산자 후위표현식 push
        if (!isOperator(token)) {
            postfixExpression.push(token);
        }
        else {
            // 연산자는 스택을 활용하여 우선순위를 비교하면서 처리
            while (stack.length > 0 &&
                $priority[stack[stack.length - 1]] >= $priority[token]) {
                postfixExpression.push(stack.pop());
            }
            stack.push(token);
        }
    }
    //stack에 남은 데이터들은 post 뒤로 붙여서 데이터 구성
    postfixExpression = [...postfixExpression, ...stack.reverse()];
    render(calculator(postfixExpression));
    $calcuratorArr = [];
};
$btnEqual.addEventListener("click", btnEqual);
function calculator(item) {
    let stack = [];
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
        }
        else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
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
//지우기 기능
//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능//지우기 기능 애만 남았다
const clear = () => {
    $calcuratorArr.pop();
    render();
};
$clear.addEventListener("click", clear);
//render
const render = (result) => {
    // 등호를 누르기 전에는 모든 입력 값을 보여줌
    let data = combineString($calcuratorArr);
    $output.value = data.join(" ");
    if (result !== undefined) {
        $output.value += ` = ${result}`;
    }
};
export {};
