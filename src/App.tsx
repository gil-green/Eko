import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AppHeader from './components/app-header'
import HomePage from './components/home-page'

function App() {
  return (
    <BrowserRouter>
      <AppHeader />

      <div className="appBody">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
