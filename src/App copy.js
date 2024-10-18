import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Page from './component1018/Page';
import UseEffect1 from './componet1017/UseEffect1';
import UseMemo1 from './componet1017/UseMemo1';
import UseRef1 from './componet1017/UseRef1';
import Test1 from './componet1017/Test1';

const App = () => {
    return (
    <>
      <Router>
        <div>
          <ul>
            <li><Link to="/">page컴포넌트</Link></li>
            <li><Link to="/useEffect">useEffect컴포넌트</Link></li>
            <li><Link to="/useMemo">useMemo컴포넌트</Link></li>
            <li><Link to="/useRef">useRef컴포넌트</Link></li>
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Test1></Test1>}></Route>
          <Route path="/useEffect" element={<UseEffect1></UseEffect1>}></Route>
          <Route path="/useMemo" element={<UseMemo1></UseMemo1>}></Route>
          <Route path="/useRef" element={<UseRef1></UseRef1>}></Route>
        </Routes>
      </Router>
    </>
    );
};

export default App;
