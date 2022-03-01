import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom" //npm install --save react-router-dom

function FirstPage() {
    useEffect(()=>{
        console.log('come first');
        //return 内部代表 解绑 
        return ()=>{
            console.log('leave first page')
        }
    }, [])      
    //该参数缺省的话默认应该是全监听的，在每次组件更新的时候执行
    //该参数 传[]空数组时，每次组件更新都不会再执行该“副作用”，只有最终组件卸载时，react 会兜个底，调用一下 解药
    //无论 useEffect 第二个参数如何写，useEffect 第一个参数定义的副作用代码，在组件第一次挂载时，至少会执行一次（即：componentDidMount）
    return <h2>First Page</h2>;
}

function SecondPage() {
    useEffect(()=>{
        console.log('come second');

        return ()=>{
            console.log('leave second page')
        }
    }, [])
    return <h2>Second Page</h2>;
}


function UseEffectDemo(){
    const [ count , setCount ] = useState(0);

    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log('====================')
        }
    }, [count])

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            

            <Router>
                <ul>
                    <li><Link to="/">First Page</Link></li>
                    <li><Link to="/second/">Second Page</Link></li>
                </ul>
                <Routes>
                    <Route path='/' exact element={<FirstPage />} />
                    <Route path='/second/' element={<SecondPage />} />
                </Routes>
            </Router>
        </div>
    )
}
export default UseEffectDemo;