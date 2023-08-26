import './App.css';
import {Routes, Route} from 'react-router-dom';
import  Form from './components/From';
import Api from './components/Api';
import Error from './components/Error'
function App() {
  return (
    <div className="App">
      <Form />
     <Routes>
        <Route path='/:category/:id' element= {<Api />} />
        <Route path="*" element={<Error />} />
       
     </Routes>
    </div>
  );
}

export default App;
