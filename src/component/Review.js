
function Header(props){
    var header = "";
    if(props.select == "kor"){
        header = <div>헤더!</div>
    } else {
        header = <div>Header!</div>
    }
    return {header}
}

function App(){
    return <>
        <Header select="kor"></Header>

        <div>
            <div>컨텐츠1</div>
            <div>컨텐츠2</div>
            <div>컨텐츠3</div>
        </div>
        <div>푸터!</div>
    </>
}

export default App;