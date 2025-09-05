import React from 'react';
import MainContainer from './containers/MainContainer';
import CurrencyManager from './componnets/CurrencyManager';

function App() {

  return (
    <div className="lg:flex lg:items-center lg:justify-center w-[100vw] h-[100vh] overflow-auto px-[16px] lg:px-0 py-[24px] lg:py-0">
      <MainContainer />
      <CurrencyManager />
    </div>
  );
}

export default App;
