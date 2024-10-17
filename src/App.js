import { useRef, useState } from "react";
import Input from "./componet1017/Input";
import Result from "./componet1017/Result";

function App() {
  const firstNum = useRef();
  const secondNum = useRef();
  const [result, setResult] = useState({ firstNum: "", secondNum: "" });

  const calc = () => {
    setResult({
      firstNum: firstNum.current.value,
      secondNum: secondNum.current.value,
    });
  };

  return (
    <>
      <Result firstNum={result.firstNum} secondNum={result.secondNum} />
      <div>
        <input ref={firstNum} placeholder='첫번째 숫자'></input><br></br>
        <input ref={secondNum} placeholder='두번째 숫자'></input><br></br>
        <button onClick={calc}>계산!</button>
      </div>
    </>
  );
}

export default App;
