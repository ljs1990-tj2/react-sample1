import { useState } from "react";
function App(){
   const [text, setText] = useState("1번 메뉴");
    return (<div>
        <button onClick={()=>{
            setText("1번 메뉴");
        }}>1번 메뉴</button>
        
        <button onClick={()=>{
            setText("2번 메뉴");
        }}>2번 메뉴</button>
        <div>{text}</div>
    </div>);
}

export default App;