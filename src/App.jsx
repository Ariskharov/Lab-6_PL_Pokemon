import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './components/pokemon-list/List';
import Detail from './components/pokemon-detail/Detail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/pokemon/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;