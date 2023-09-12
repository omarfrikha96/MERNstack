import './App.css';
import {Routes , Route} from 'react-router-dom';
import Main from './Views/Main';
import Details from './Components/Details';
import Update from './Components/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<Details/>} />
        <Route path='/edit/:id' element={<Update/>} />
      </Routes>
    

    </div>
  );
}

export default App;
