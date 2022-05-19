import logo from './logo.svg';
import './App.css';
import Courseentry from './component/Courseentry';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import View from './component/View';

function App() {
  return (
    <div className="App">
      <Courseentry/>
      <View/>
    </div>
  );
}

export default App;
