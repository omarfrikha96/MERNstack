import React from 'react';

const Tabs = (props) => {


  // conditionally styling the tabs with classes in CSS
  const tabStyle = (index) => {
    if (index === props.currentIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  const setSelectedTab = (index) => {
    props.setCurrentIndex(index);
  }

  return (
    <div>

      {
        props.Tabs.map((tab, index) => (
          <div className={`tab  ${ tabStyle(index) } `} onClick={(e) => setSelectedTab(index) }>
            { tab.label }
          </div>
        ))
      }

    </div>
  )
}

export default Tabs;