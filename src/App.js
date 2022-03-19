import React from "react";
import HomePage from './pages/HomePage.js'
import Header from './components/Header/Header'
import { GlobalContextProvider } from './context/GlobalContext';

function App() {

  return (
    <>
      <GlobalContextProvider>
        <Header/>
        <HomePage/>
      </GlobalContextProvider>
    </>
  );
}

export default App;
