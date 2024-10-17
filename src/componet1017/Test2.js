import React, { useEffect, useState } from 'react';

function Test2(props) {
    const [count, setCount] = useState(0);
    const [flg, setFlg] = useState(false);
    useEffect(()=>{
        let interval = null
        if(flg){
            interval = setInterval(()=>{
                setCount(prev => prev + 1);
            }, 1000)
        } else {
            clearInterval(interval);
        }       
    }, [flg])
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>{setFlg(!flg)}}>시작</button>
        </div>
    );
}

export default Test2;