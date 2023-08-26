import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './components/Home';
import Keyword from './components/Keyword';

function App() {

  return (
    <div className="App">
   

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/:key/:color/:background" element={<Keyword />} />
        <Route path="/:key" element={<Keyword />} />
      </Routes>
    </div>
  );
}

export default App;
