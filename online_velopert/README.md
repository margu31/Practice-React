# PRACTICE REACT with Velopert Online Class

- UseMemo : 연산된 값을 재사용
- UseCallback : 특정 함수 재사용
- React.memo : props가 바뀌었을 때에만 리렌더링, 렌더링된 결과를 재사용, 최적화

- useReducer : action 객체를 기반으로 상태를 업데이트, 상태 업데이트 로직을 컴포넌트 밖으로 분리 가능

  - action 객체 : 업데이트 할 때 참조하는 객체
  - dispatch : action을 발생시키는 함수
    - type: 어떤 업데이트를 할 건지 명시

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

- 커스텀 Hook
