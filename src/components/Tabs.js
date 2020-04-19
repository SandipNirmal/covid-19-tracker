import React, { useState } from 'react';

import '../styles/tab.css';

function Tab({ name, handleClick, selected }) {
  const classNames = selected
    ? 'tab-header-item tab-selected'
    : 'tab-header-item';

  return (
    <button onClick={handleClick} className={classNames}>
      {name}
    </button>
  );
}

function TabHeder({ selectedIndex, handleClick, tabs }) {
  return (
    <div className="tab-header">
      {tabs.map(({ name }, index) => (
        <Tab
          name={name}
          key={name}
          selected={index === selectedIndex}
          handleClick={() => {
            handleClick(index);
          }}
        />
      ))}
    </div>
  );
}

function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
      <TabHeder
        tabs={tabs.map(({ name }) => ({ name }))}
        handleClick={setSelectedTab}
        selectedIndex={selectedTab}
      />
      {tabs[selectedTab].component}
    </>
  );
}

export default Tabs;
