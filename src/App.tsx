import React, { useEffect } from 'react';
import MainContainer from './containers/MainContainer';
import ExchangeRateManager from './componnets/ExchangeRateManager';
import OnlineStateManager from './componnets/OnlineStateManager';
import useCurrenciesState from './states/currenciesState';
import { getFromLocalStorage } from './helpers/storageHelper';
import { Currency } from './models/Currency';
import { EXCHANGE_RATE_KEY, FROM_CURRENCY_STORAGE_KEY, TO_CURRENCY_STORAGE_KEY } from './constants';
import useExchangeState from './states/exchangeState';
import { ApiExchangeData } from './models/ApiExchangeData';

function App() {

  const { setFromCurrency, setToCurrency } = useCurrenciesState()
  const { setExchangeData } = useExchangeState()

  useEffect(() => {
    const fromCurrency = getFromLocalStorage<Currency>(FROM_CURRENCY_STORAGE_KEY)
    if (fromCurrency) setFromCurrency(fromCurrency)
    const toCurrency = getFromLocalStorage<Currency>(TO_CURRENCY_STORAGE_KEY)
    if (toCurrency) setToCurrency(toCurrency)
    const exchangeData = getFromLocalStorage<ApiExchangeData>(EXCHANGE_RATE_KEY)
    if (exchangeData) setExchangeData(exchangeData)
  },[])

  return (
    <div className="lg:flex lg:items-center lg:justify-center w-[100vw] h-[100vh] overflow-auto px-[20px] sm:px-[16px] lg:px-0 py-[24px] lg:py-0 bg-neutral-50 sm:bg-white">
      <MainContainer />
      <ExchangeRateManager />
      <OnlineStateManager />
    </div>
  );
}

export default App;
