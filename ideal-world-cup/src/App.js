import logo from './logo.svg';
import './App.css';
import Competition from './components/Competition';
import path from "../src/image/사과.svg";

function App() {
  return (
    <div className="App">
      
        이상형 월드컵 
        <Competition leftImage={path} rightImage={path}/>
  
    </div>
  );
}

export default App;
