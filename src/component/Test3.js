import { useState } from "react";

function App(){
    const [count, setCount] = useState(0);
    const [inputCnt, setInputCnt] = useState(1);

    const increment = ()=>{
        setCount(prev => prev + Number(inputCnt));
    }
    const decrement = ()=>{
        setCount(Math.max(count-Number(inputCnt), 0));
    }
    const reset = ()=>{
        setCount(0);
    }

    return <>
        <div>현재 숫자 : {count}</div>
        <div>
            <input value={inputCnt} onChange={(e)=>{
                setInputCnt(e.target.value);
            }}></input>
            <div>
                <button onClick={increment}>증가</button>
                <button onClick={decrement}>감소</button>
                <button onClick={reset}>초기화</button>
            </div>
        </div>
    </>
}

export default App;