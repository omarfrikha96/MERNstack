import './App.css';
import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {
  



  const [ allTabs, setAllTabs ] = useState([
    { label: "Tab 1", content: "Tab 1 content is showing here" },
    { label: "Tab 2", content: "Tab 2 content is showing here" },
    { label: "Tab 3", content: "Tab 3 content is showing here" },
  ]);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
      <Tabs 
        Tabs={ allTabs } 
        currentIndex={ currentTabIndex }
        setCurrentIndex={ setCurrentTabIndex } 
      />
      
      <Results 
      screen={ allTabs }
      currentscreen={ currentTabIndex } />
    </div>
  );
}

export default App;