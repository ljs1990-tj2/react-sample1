import React from 'react';

function Input(props) {
    return (
        <div>
            <input placeholder='첫번째 숫자'></input><br></br>
            <input placeholder='두번째 숫자'></input><br></br>
            <input placeholder='+,-,*,/'></input><br></br>
            <button>계산!</button>
        </div>
    );
}

export default Input;