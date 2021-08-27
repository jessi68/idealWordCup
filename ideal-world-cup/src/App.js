import './App.css';
import { Tournaments } from './components/Tournaments';
import importAll from './util/importAllFiles';
import { clear, getImages, saveItems } from './util/storage';




function App() {

 //localStorage.setItem()
 clear();
 const images = importAll(require.context('./image/fruits', false, /\.jpg/));
 saveItems(images);

 let numberOfParticipants = 4;

  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        이상형 월드컵 

        
        <Tournaments numberOfParticipants={numberOfParticipants} images={getImages(numberOfParticipants)}></Tournaments>
    </div>
  );
}

export default App;
