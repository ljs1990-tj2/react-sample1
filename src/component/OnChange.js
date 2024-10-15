import { useState } from "react";

function App(){
    const [text, setText] = useState("");
   
    const inputText = (e)=>{
        console.log(e.target.value);
        setText(e.target.value);
    }
    return (<>
        <input onChange={inputText} value={text}></input>
       
        <div>{text}</div>
    </>);
}

export default App;