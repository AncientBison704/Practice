"use client"


import React, { useEffect, useState } from 'react';

const mainPage = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobileView = screenWidth >= 768; 
  return (
    <div>
      {isMobileView ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h2>Please open this page on a phone please </h2>
          <p>This site is not optimized for desktops, you will get the best experience on a phone </p>
        </div>
      ) : (
        <div className="container">
      <div className="left-column">
        <div className="box mint-color">
          <h2>Current Balance</h2>
          <p>10000 Pkr</p>
        </div>
      </div>
      <div className="right-column">
        <div className="box light-blue">
          <h2>Load Money</h2>
        </div>
        <div className="box peach-red">
          <h2>Send & Request</h2>
        </div>
      </div>
    </div>
      )}
    </div>
  );
};

export default mainPage;
