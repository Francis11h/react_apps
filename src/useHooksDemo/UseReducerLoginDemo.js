import React, { useReducer } from "react";

const initState = {
  name: '',
  pwd: '',
  isLoading: false,
  error: '',
  isLoggedIn: false,
}
function loginReducer(state, action) {
  switch(action.type) {
      case 'login':
          return {
              ...state,
              isLoading: true,
              error: '',
          }
      case 'success':
          return {
              ...state,
              isLoggedIn: true,
              isLoading: false,
          }
      case 'error':
          return {
              ...state,
              error: action.payload.error,
              name: '',
              pwd: '',
              isLoading: false,
          }
      default: 
          return state;
  }
}


export const UseReducerLoginDemo = () => {
  const [state, dispatch] = useReducer(loginReducer, initState);
  const { name, pwd, isLoading, error, isLoggedIn } = state;
  const login = (event) => {
      event.preventDefault();
      dispatch({ type: 'login' });
      login({ name, pwd })
          .then(() => {
              dispatch({ type: 'success' });
          })
          .catch((error) => {
              dispatch({
                  type: 'error'
                  // payload: { error: error.message }
              });
          });
  }
  return ( 
      //  返回页面JSX Element
      <></>
  )
}

export default UseReducerLoginDemo;