import { useState } from "react";

function App(){
    // var state = useState(999); // [999, fucntion()]
    // var _count = state[0];
    // var _countFunc = state[1];

    const [count, setCount] = useState(999);

    return <>
       {count}
       <button onClick={()=>{
           setCount(count + 10);
           console.log(count);
       }}>클릭!</button>
    </>
}

export default App;