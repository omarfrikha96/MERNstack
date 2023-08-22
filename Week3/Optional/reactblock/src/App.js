import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
 
                
function App() {
  return (
    <div className="app" style={{backgroundColor : "#dddddd" }}>
        <Header />
      <div style={{display : "flex" , justifyContent: "center" }}>
        <Navigation />
        <Main>
          <div>
            <SubContents />
            <SubContents />
            <SubContents />
          </div>
          <div style={{display : "flex" ,justifyContent: "center" }}>
            <Advertisement />
          </div>
        </Main>

      </div>

    </div>
  );
}
                
export default App;
