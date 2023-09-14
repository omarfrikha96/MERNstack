import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayAll from './components/DisplayAll';
import Edit from './components/Edit';
import AuthorForm from './components/AuthorForm';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
       <h1>Favorite authors</h1>
     <Routes>
           <Route path="/" element={<DisplayAll />} />
          <Route path="/new" element={<AuthorForm />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

    </div>
  );
}

export default App;
