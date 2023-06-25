import './App.css';
import Home from './components/Home';
import ParamsComponent from './components/ParamsComponent';
import {BrowerRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowerRouter>
    <div className="App">
      
      <Routes>
        <Route  element={<Home/>} path="/home"/>
        <Route element={<ParamsComponent />} path="/:word" />\
        <Route element={<ParamsComponent />} path="/:word/:color/:bgCol" />
      </Routes>
    </div>
    </BrowerRouter>
  );
}

export default App;
