import logo from './logo.svg';
import './App.css';
import Courseentry from './component/Courseentry';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import View from './component/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Courseentry/>}/>
        <Route path="/view" exact element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
