import React from 'react'
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import MainPage from './pages/MainPage.jsx'

function App(){ 
  
  return (
    <div>
    <Routes>
        <Route path="/day" Component={HomePage} />
        <Route path="/day/main" Component={MainPage} />
    </Routes>
    </div>
    )
}

export default App