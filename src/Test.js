import React, { useReducer } from 'react';

// 리듀서 함수
function reducer(state, action) {
  switch (action.type) {
    case 'YES':
      return {no : state.no, yes : state.yes + 1};
    case 'NO':
      return { ...state, no: state.no + 1 };
    case 'RESET':
      return { yes: 0, no: 0 };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer,  { yes: 0, no: 0 });

  return (
    <div>
      <h1>투표 시스템</h1>
      <div>찬성: {state.yes}</div>
      <div>반대: {state.no}</div>
      <button onClick={() => dispatch({ type: 'YES' })}>찬성</button>
      <button onClick={() => dispatch({ type: 'NO' })}>반대</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>초기화</button>
    </div>
  );
}

export default App;
