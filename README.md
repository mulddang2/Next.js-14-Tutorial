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

- Catch-all Segments?<br/>
  대괄호 [...segmentName] 안에 줄임표를 추가하면 동적 세그먼트를 모든 후속 세그먼트로 확장할 수 있습니다. (ex. [...slug])

- Optional Catch-all Segments?<br /> 이중대괄호 안에 매개변수를 포함하여 포괄 세그먼트를 선택적으로 만들 수 있습니다. (ex. [[...slug]])

- 위 둘의 차이점: <br />이중대괄호는 매개변수가 없는 경로도 일치한다(ex. [...slug] 이렇게만 할 경우, /docs/feature/1 로 URL 입력했을 때는 확장되는데, 막상 /docs로 입력하면 경로 연결이 안됨. 그래서 이중대괄호를 하면 해결이 된다.)

### 7. Not Found Page

- Next.js는 기본적으로, 없는 경로여도 액세스한다.
- not-found 페이지를 가장 루트에 만들 수도 있고, 폴더 안에 만들 수도 있다.
- ex. 리뷰 폴더 안에 notFound 페이지를 만들고, 리뷰가 1000개 보다 많으면 리뷰용 notFound 페이지를 띄울 수도 있다.👏👏

### 8. File Colocation

- page.js 또는 Route.js 파일이 경로 세그먼트에 추가될 때까지 경로에 공개적으로 액세스할 수 없다.
- 경로가 공개적으로 액세스 가능하도록 설정된 경우에도 page.js 또는 Route.js에서 반환된 콘텐츠만 클라이언트로 전달된다.
- 이렇게 하는 이유는.. 실수로 라우팅 되지 않고 프로젝트 파일을 안전하게 배치하기 위함이다.

### 9. Private Folders

- 폴더 앞에 밑줄(\_folderName)을 붙여 생성할 수 있다.
- 폴더와 모든 하위 폴더를 라우팅에서 제외한다.
- app 디렉토리에 공동 배치할 수 있다.
- 언제 유용한지..

  > 1. 라우팅 로직에서 UI 로직을 분리할 때
  > 2. 코드 에디터에서 파일 정렬 및 그룹화할 때
  > 3. 향후 Next.js 파일 컨벤션과의 잠재적인 이름 지정 충돌을 방지하고자 할 때

- 알면 좋은..

  > 1. 폴더 이름 앞에 %5F(URL 인코딩된 밑줄 형식): <b>%5FfolderName</b>을 붙여 밑줄로 시작하는 URL 세그먼트를 생성할 수 있다.
  >    <br />테스트 해보니, 폴더를 %5Flib으로 바꿨으면, URL에서도 동일하게 %5Flib으로 입력해야 Not Found Page로 이동함.
  >
  > 2. private folder 사용하지 않는 다면, 예상치못한 충돌 방지를 위해서 Next.js 특수파일 규칙을 아는 것이 도움될 것이다.

  ### 10. Route Groups

  - 편의상 login을 auth로 넣었는데, url표기는 localhost:3000/auth/login --> localhost:3000/login 으로 하고싶음 그럴 때 사용..
  - 섹션이나 의도를 기반으로 경로와 프로젝트 파일을 그룹으로 구성할 수 있다.
  - (회원가입, 로그인, 비밀번호 찾기)와 같이 그룹화하면 좋을 페이지를 새 폴더(ex. auth)에 모으는데, 그러면 경로가 새폴더명(ex.auth)도 /(슬래시)가 추가 되니까,, 그게 어떤 이유로 좋지 않을 때,
    <b>모은 새 폴더(ex. auth)를 경로에서는 지우고 싶을 때!!! 그럴 때 사용한다.</b> 투명 경로 처리..? 라고 생각하면 편할 듯함

  ### 11. Layouts

  - 레이아웃은 빌드할 때, 앱의 여러 페이지간에 공유되는 UI이다. (header, footer)와 같이 어느 페이지를 가든 똑같은 것
  - 가장 최상위에 있는 layout.tsx는 지워도 자동으로 생김

  ### 12. Nested Layouts

  - Header, Footer 외에 특정 layout을 반복하고 싶을 때 사용
  - 원하는 Url 폴더 안에 layout파일을 추가한다. 그리고 page 파일에서 children을 받는다.

  ### 13. Route Group Layout
  - (폴더이름) 폴더 안에 담겨진 것 안에도 고정 layout을 만들 수 있다.
  - 하지만, 비밀번호 찾기와 같은 부분은 레이아웃을 공유하지 않는 것이 좋다.
