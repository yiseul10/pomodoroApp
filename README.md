<h1>마이 뽀모도로앱</h1>

마이 뽀모도로앱은 기본에 충실한 시간관리 어플입니다.

- 활용도 - 코딩공부에 효율적으로 집중하기 위해👍🏻
- 학습기회 - Next.js와 Tailwind css를 학습하고 적용해봅니다.

### [<u>View live.</u>](https://pomodoro-app-rose.vercel.app/)

### [<u>작업이야기</u>](https://next-blog-yiseul10.vercel.app/blog/pomodoroApp)

<br/>
<br/>

## Tech

- [Next.js] - 서버사이드렌더링을 쉽게 구현할 수 있고 유연하게 제작이 가능한 리액트 프레임워크 Next.js를 사용하였습니다.
- [tailwind css] - 유틸리티 우선 CSS 프레임워크 tailwind css를 사용하였습니다.
- [Vercel] - Next.js에 최적화가 되어있는 Vercel로 배포를 하였습니다.

## Library

- [Rough notation] 스케치 느낌의 하이라이트 애니메이션을 적용하는 JavaScript 라이브러리입니다.
  뽀모도로 앱에 잘 맞는 애니메이션 요소라고 생각해서 적용하였습니다.

## Features

## <a href='https://pomodoro-app-rose.vercel.app/' target='_blank' rel='noreferrer'>⏳ 뽀모도로 앱</a>

<img src='/pomo_graph.png' width='80%'></img>

- 집중시간과 휴식시간 타이머를 직접 설정할 수 있습니다.
- 타이머를 일시정지 할 수 있고 해당 페이지를 벗어날 땐 사용자 확인 후 진행됩니다.
- 타이머가 끝나면 알람이 자동으로 울립니다.

<br />

## 사용자 설정값에 접근

`useRef`을 이용해 모달창의 인풋값을 연결합니다.
`useRef`은 .current 프로퍼티에 변경 가능한 값을 담고 있는 개체입니다.
ref 객체 안의 값은 독립적이기 때문에 프로퍼티가 변경되더라도 리렌더링을 유발하지 않습니다.

HTML 엘리먼트가 아닌 React 컴포넌트에서 관리하는 목적으로 ref prop을 사용하기에
`forwardRef()`로 ref prop을 받아 알람시간을 제어합니다.

<br />

---

**_변경 사항_**

- 🛠 22/2/6 렌더링 최적화 React.memo 수정
- 문제 : index.js에서 상태정보가 있고 때문에 자식컴포넌트들이 영향을 받아 리렌더링됩니다.

보통 렌더링 최적화에 useMemo, useCallback hook이나 React.memo HOC를 사용합니다.
하지만 최적화는 결국 메모제이션용 메모리가 추가로 필요하기 때문에 괜한 연산을 추가하는 것이 아닌지 고민해 볼 필요가 있었습니다.

[React.memo() 현명하게 사용하기](https://ui.toast.com/weekly-pick/ko_20190731)에서는 React.memo()를 사용하기 가장 좋은 경우로 함수형 컴퍼넌트가 같은 props로 자주 렌더링 될거라 예상될 때라고 합니다.
실시간으로 영화정보 페이지의 조회수를 나타내는 경우, 클릭시마다 컴포넌트가 렌더링되고 같은 props의 자식 컴포넌트도 리렌더링이 됩니다.

뽀모도로 앱도 비슷한 경우라고 생각되어 하위컴포넌트의 리렌더링을 막기 위한 방법으로 React.memo를 사용하였습니다.

<br/>

---

<img src='public/pomodoroApp.png' width='390'></img>

[next.js]: https://nextjs.org
[tailwind css]: https://tailwindcss.com
[vercel]: https://vercel.com
[rough notation]: https://roughnotation.com/
