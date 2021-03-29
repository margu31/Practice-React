# PRACTICE REACT with Velopert Online Class

## Create React App

- `useState` : 상태 관리
- `useEffect` : 컴포넌트가 마운트 된 이후 또는 업데이트 된 이후 시점 보장
- `useMemo` : 연산된 값을 재사용
- `useCallback` : 특정 함수 재사용
- `React.memo` : props가 바뀌었을 때에만 리렌더링, 렌더링된 결과를 재사용, 최적화

- `useReducer` : action 객체를 기반으로 상태를 업데이트, 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능

  - `action` 객체 : 업데이트 할 때 참조하는 객체
  - `dispatch` : action을 발생시키는 함수
    - `type`: 어떤 업데이트를 할 건지 명시

  ```jsx
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  }
  ```

  ```jsx
  const [number, dispatch] = useReducer(reducer, 0);
  ```

- custom `Hook`

---

## React Router

- `SPA` (Single Page Application)

  - 페이지가 1개인 어플리케이션
  - 라우팅을 **클라이언트**가 담당
  - **라우팅**이란? 어떤 주소에 어떤 UI를 보여줄지 규칙을 정하는 일
  - 기존 `non-SPA`는 여러 페이지로 구성되어 있어 사용자가 요청할 때마다 페이지가 새로고침되고, 로딩할 때마다 서버측으로부터 리소스를 전달받고 리소스를 해석 후 렌더링 & 뷰가 어떻게 보여질지 정하는 것도 서버 담당이었음  
    &#8594; 사용자와의 인터랙션이 많은 경우, 서버 자원이 많이 사용되어야 하고 그에따라 불필요한 트래픽 발생
  - `SPA`는 라우팅을 모두 클라이언트에서 담당하여 서버에 요청없이 페이지를 렌더할 수 있음  
    if, 동적인 값이 필요한 경우, 특정 API를 서버측에 요청해서 필요한 데이터만 json형식으로 받아와서 보여줄 수 있음
  - 장점 : 서버 자원을 아낄 수 있음, 좀 더 좋은 사용자 경험을 제공할 수 있음
  - 단점
    1. 앱의 규모가 커지면 js 파일의 크기가 심하게 커질 수 있음  
       &#8594; code splitting으로 해결 가능
    2. 브라우저에서 JS가 구동되지 않으면 UI 볼 수 없음 (ex, 검색엔진에서 크롤링 불가능)  
       JS가 구동되기 전까지 페이지 볼 수 없음 (JS 다운로드 되기 전까지.. 빈화면..)  
       &#8594; server side rendering 기술로 해결 가능

- 리액트 라이브러리

  1.  `react-router`  
      컴포넌트를 기반으로 라우팅 함

  2.  `next.js`
      서버 사이드 렌더링을 쉽게 구현 가능  
      파일 경로, 이름을 기반으로 라우팅 함

- `react-router`의 주요 컴포넌트

  - `<BrowserRouter>` : HTML5 History API 사용, 단순히 주소만 바꾸고 페이지는 다시 불러오지 않음 (서버측에 새로운 요청 안함)
  - `<HachRouter>` : 옛날 라우팅 방식, 주소 뒤에 `#`를 넣음 - 옛날 브라우저에서도 작동함
  - `<MomoryRouter>` : 브라우저의 주소와 무관하기 때문에 브라우저가 아닌 환경에서 쓰기 좋음(ex, 테스트 환경), 주소는 안바뀜
  - `<StaticRouter>` : 서버 사이드 렌더링 할 때 사용
  - `<Route>` : 라우트를 정의할 때 사용하는 컴포넌트 - 어떤 경로로 들어왔을 때 어떤 컴포넌트를 보여줄지 설정
  - `<Link>` : `a`태그로 구성, 새로고침 안되고 Router의 주소만 바꿔줌

- `Route` : 특정 주소에 특정 컴포넌트를 보여주겠다!
- `Link` : 다른 경로로 가고 싶을 때 `a`태그 대신 `Link`를 사용! a 태그는 페이지를 새로 로딩되어 버림. Link는 렌더링만 다시 함

- URL Parameter : 특정 데이터를 조회할 떄 많이 사용 (ex, /profiles/margu)
- Query : 다양한 옵션을 주어 조회를 할 때, 검색할 때 주로 사용 (ex, /filter?type=book&sort_by=data)

- 서브라우트 : tab이 있는 페이지에서 많이 사용

- `history` 객체 : 컴포넌트에서 라우터에 직접 접근 가능, 특정 함수를 호출했을 때 특정 경로로 이동 또는 뒤로 가는 등 페이지 이탈 방지 가능
- `withRouter` 함수 : 라우터 컴포넌트가 아닌 곳에서 match, location, history를 props로 받아와서 사용할 수 있게 해줌 (조건부로 이동해야할 때 자주 사용 ex, 로그인 성공했을 때 특정 경로로 가랏!)
