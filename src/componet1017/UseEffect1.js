import React, { useEffect, useState } from 'react';

function UseEffect1(props) {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(()=>{
        console.log("DependencyList가 없을때! 렌더링 될때마다 항상 실행된다!");
    });
    useEffect(()=>{
        console.log("DependencyList에 []가 있을 때! 최초 한번 실행");
    }, []);
    useEffect(()=>{
        console.log("DependencyList에 []가 있을 때! 최초 한번 + count1변경될 때");
    }, [count1]);
    
    return (
        <div>
            <div>count1 : {count1}</div>
            <div>count2 : {count2}</div>
            <button onClick={()=>{setCount1(count1 + 1)}}>count1 증가</button>
            <button onClick={()=>{setCount2(count2 + 1)}}>count2 증가</button>
        </div>
    );
}

export default UseEffect1;