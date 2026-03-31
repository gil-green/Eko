import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import type { DifficultyType } from './components/challenge-config';
import { Difficulty } from './components/challenge-config';

import AppHeader from './components/app-header'
import HomePage from './components/home-page'

function App() {
  const [currDifficulty, setDifficulty] = useState<DifficultyType>(Difficulty.easy);

  return (
    <BrowserRouter>
      <AppHeader />
      <div className="appBody">
        <Routes>
          <Route path="/" element={<HomePage currDifficulty={currDifficulty} setDifficulty={setDifficulty} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
