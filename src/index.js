import React from 'react';
import ReactDOM from 'react-dom';

import Example from './useHooksDemo/Example'
import UseEffectDemo from './useHooksDemo/UseEffectDemo'
import UseContextDemo from './useHooksDemo/UseContextDemo'
import DatePickerDemo from './antd-demo/DatePickerDemo'
import AxiosPersonListDemo from'./axios/axiosPersonListDemo'
import AxiosPersonAddDemo from'./axios/axiosPersonAddDemo'
import UseReducerDemo from'./useHooksDemo/UseReducerDemo'
import UseReducerLoginDemo from'./useHooksDemo/UseReducerLoginDemo'

ReactDOM.render(
    // <Example />,
    // <UseEffectDemo />,
    // <UseContextDemo />,
    // <DatePickerDemo />,
    // <div>
    //   <AxiosPersonAddDemo />
    //   <AxiosPersonListDemo />
    // </div>,
    // <UseReducerDemo />,
    <UseReducerLoginDemo />,
    document.getElementById('root')
  );
