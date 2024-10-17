import React from 'react';

function Sample1(props) {
    var cnt = 10;
    return (
        <div>{cnt}
            <button onClick={()=>{
                cnt++;
                console.log(cnt);
            }}>증가</button>
        </div>
    );
}

export default Sample1;