import React, { useState, useEffect } from 'react';

function Test1() {
    const [count, setCount] = useState(0);
    const [flg, setFlg] = useState(false);

    useEffect(() => {
        let interval = null;
        console.log("test");
        if (flg) {
            interval = setInterval(() => {
                setCount(prev => {
                    if (prev >= 9) {return 0;}
                    return prev + 1;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => { 
            return clearInterval(interval)
        };
    }, [flg]);

    const toggle = () => {
        setFlg(!flg);
    };

    return (
        <div>
            <h1>{count} 초</h1>
            <button onClick={toggle}>{flg ? '중지' : '시작'}</button>
        </div>
    );
};

export default Test1;
