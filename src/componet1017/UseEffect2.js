import React, { useEffect, useState } from 'react';

function UseEffect2(props) {
    const [flg, setFlg] = useState(true);
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log("1초에 한번씩 실행!");
        }, 1000);
        return ()=>{
            clearInterval(interval);
            console.log("종료되었습니다!");
        }
    }, [flg])

    return (
        <div>
            <div>1초에 한번씩 실행중인 컴포넌트!</div>
            <button onClick={()=>{
                setFlg(!flg);
            }}>클릭</button>
        </div>
    );
}

export default UseEffect2;