import { createContext, useContext, useState } from "react"

const DataContext = createContext();

function Sub1(){
  return <>
    <Sub2></Sub2>
  </>
}
function Sub2(){
  return <>
    <Sub3></Sub3>
  </>
}
function Sub3(){
  const { name } = useContext(DataContext);
  return <>
    <div>name : { name }</div>
    <Sub4></Sub4>
  </>
}
function Sub4(){
  return <>
    <Sub5></Sub5>
  </>
}
function Sub5(){
  return <>
    <Sub6></Sub6>
  </>
}
function Sub6(){
  const {count} = useContext(DataContext);
  return <>
    <div>count : {count}</div>
    <Sub7></Sub7>
  </>
}
function Sub7(){
  return <>
  </>
}


function App() {
  const [count, setCount] = useState(100);
  const [name, setName] = useState("홍길동");
  // count 는 Sub6컴포넌트가, name은 Sub3 컴포넌트가
  return (
    <>
      <DataContext.Provider value={{count, name}}>
        <Sub1></Sub1>
      </DataContext.Provider>
    </>
  );
}

export default App;
