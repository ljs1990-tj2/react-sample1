import React, { useState } from 'react';

function dataCall(count){
    for(var i=0; i<50000; i++){
        console.log(i);
    }
    return count * 2;
}
function dataCall2(count){
    return count * 2;
}
function Test4() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);
    var data = dataCall(count1);
    var data2 = dataCall2(count2);
    return (
        <div>
            {data} <br></br>
            {data2}
            <button onClick={()=>{
                setCount1(count1+1);
            }}>증가</button>
            <button onClick={()=>{
                setCount2(count2+1);
            }}>증가</button>
        </div>
    );
}

export default Test4;