import PersonCard from './components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
     <PersonCard firstName={ "Doe" } lastName={ "Jane" } age={45} hairColor={ "black" } />
    <PersonCard firstName={ "Smith" } lastName={ "Jhon" } age={88} hairColor={ "Brown" } />
    </div>
  );
}

export default App;
