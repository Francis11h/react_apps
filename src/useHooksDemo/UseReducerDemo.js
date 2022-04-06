import React, { useReducer } from "react";
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function UseReducerDemo() {
  // params 1.函数 2.初始值
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

// function UseReducerDemo() {
//   //
//   const [count, dispatch] = useReducer((state, action) => {
//     switch (action) {
//       case "add":
//         return state + 1;
//       case "sub":
//         return state - 1;
//       default:
//         return state;
//     }
//   }, 0);
//   return (
//     <div>
//       <h2>现在的分数是{count}</h2>
//       <button onClick={() => dispatch("add")}>Increment</button>
//       <button onClick={() => dispatch("sub")}>Decrement</button>
//     </div>
//   );
// }

export default UseReducerDemo;
