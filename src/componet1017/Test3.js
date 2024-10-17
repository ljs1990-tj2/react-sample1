import React, { useState, useEffect, useRef } from 'react';

const InputManager = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [previousInputs, setPreviousInputs] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    // 유효성 검사
    if (inputValue.length < 3) {
      setErrorMessage('3글자 이상이어야 합니다.');
    } else {
      setErrorMessage('');
    }

    // 입력값이 변경될 때마다 콘솔에 로그 출력
    console.log(`현재 입력값: ${inputValue}`);
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length >= 3) {
      setPreviousInputs((prev) => {
        const newInputs = [inputValue, ...prev];
        return newInputs; // 최대 5개만 유지
      });
      setInputValue(''); // 입력 필드 초기화
      inputRef.current.focus();
    } else {
        alert("3글자 이상이어야 합니다.");
    }
  };

  // 컴포넌트가 마운트될 때 입력 필드에 포커스
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">저장</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <h3>이전 입력값:</h3>
      <ul>
        {previousInputs.map((input, index) => (
          <li key={index}>{input}</li>
        ))}
      </ul>
    </div>
  );
};

export default InputManager;
