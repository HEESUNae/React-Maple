import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import MainPage from './pages/MainPage';
import CharacterPage from './pages/CharacterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<MainPage />} />
          <Route path="/character" element={<CharacterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
