# 🎉 2024-03-04 ~ 2024-03-08 계산기

## 📄 소개

Vanlia Javascript 계산기를 만들어 볼 예정

## 🔥 프로젝트 목표

CSS의 Grid 사용하여 UI를 구현해보고 클라이언트의 입력을 바탕으로 다양한 연산 결과값을 도출하는 과정에 있어서
필요한 지식들을 쌓아 Javscript의 개발 역량을 향상하기를 기대한다.

## 🔧 기술스택

- HTML
- CSS
- Javascript
- Typescript

### 📌 현재 개발 상태

- **24-03-05** 두 값을 입력받아 연산을 수행하여 결과값을 화면에 표시하는 기본적인 기능은 마무리하였습니다.
- **24-03-07** 여러 값을 받아 연산을 수행하여 결과값을 화면에 표시하는 기능을 추가로 구현하였습니다.
- **24-03-07** 폴더 및 파일 구조를 재구성했습니다.

### 📝 앞으로 할 개선 해야 할 방향

- 사칙연산 이외에도 더 다양한 연산들이 존재하며, 이를 추가하고 확장까지 고려하여 보충할 예정이다.
- 코드를 손쉽게 조정할 수 있는 구조적인 개선 함께 진행할 것이다.

#### 🥅 Trouble shooting

- 단순히 두 숫자를 연산할 때는 연산자의 우선 순위를 고려할 필요가 없었지만, 더 많은 숫자들을 포함하는 연산과 그 결과값을 도출할 때는 우선 순위가 중요해졌습니다.
- 해당 문제를 해결하기 위해서는 스택이라는 자료 구조를 활용하여 연산자의 우선 순위를 관리하는 후위표기법으로의 변환 과정이 필요하게 되었습니다.
-
- ### 스택 LIFO (Last In First Out)
- 과자 종류 프링글스 형태인 "쌓다"라는 의미로, 데이터를 쌓아올린 형태의 자료 구조이며, 순서대로 쌓이며 마지막에 삽입된 자료가 가장 먼저 출력되는 구조를 가진다.
-
- ### 중위 표시법 1 + 2 / 3
- (사람들이 이해하기 쉬운 표현법)
-
- ### 후위 표시법 1 2 3 / +
- (컴퓨터가 연산을 쉽게 하기 위한 표현법)

#### 💬 기타

- eval을 쓰지 않는 이유
- eval은 문자열로 이루어진 코드를 실행하는 메소드이지만, 사용을 권장하지 않으며 이는 보안에 매우 취약하다는 특징이 있다. 또한 strict 모드에서는 eval을 사용을 엄격하게 제한하고 있어서, 안정성을 위해 eval을 사용하지 않는걸 권장한다.
