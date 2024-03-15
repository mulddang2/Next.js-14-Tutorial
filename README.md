# Next.js-14-Tutorial

### 1. 설치

> npx create-next-app@latest

### 2. 옵션 선택은 기본가져오기 별칭을 제외한 나머지 모두 'Yes'

### 3. 만든 폴더로 이동

> cd hello-world
>
> npm run dev

---

### 4. 실행 시, 동작 과정

- npm run dev 실행 하면, 실행이 <b>layout으로 전달</b>
- layout파일 안에, RootLayout컴포넌트가 localhost 3000으로 탐색할 때 렌더링된다.
- layout 파일 내 children prop은 항상 page 파일에 정의된 컴포넌트를 참조한다.
- app 안에 Home 컴포넌트는 package.json에서 레이아웃까지의 제어흐름인 브라우저에서 렌더링된다.

---

### 5. Routing Conventions

1. 모든 경로는 app 폴더 안에 있어야 함
2. 경로를 나타내는 모든 파일의 이름은 page.js 또는 page.tsx로 지정되어야 한다.
3. 모든 폴더는 브라우저 URL에서 path 분할 하는데 해당한다.

### 6. Catch-all Segments & Optional Catch-all Segments

- Catch-all Segments?
  대괄호 [...segmentName] 안에 줄임표를 추가하면 동적 세그먼트를 모든 후속 세그먼트로 확장할 수 있습니다. (ex. [...slug])

Optional Catch-all Segments

- 이중대괄호 안에 매개변수를 포함하여 포괄 세그먼트를 선택적으로 만들 수 있습니다. (ex. [[...slug]])

- 위 둘의 차이점: 이중대괄호는 매개변수가 없는 경로도 일치한다(ex. [...slug] 이렇게만 할 경우, /docs/feature/1 로 URL 입력했을 때는 확장되는데, 막상 /docs로 입력하면 경로 연결이 안됨. 그래서 이중대괄호를 하면 해결이 된다.)
