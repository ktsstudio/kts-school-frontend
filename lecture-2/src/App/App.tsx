import React from 'react';
import Button from '@components/Button';
import { sum } from '@utils/sum';
import DetailPage from './pages/DetailPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <header></header>
      <DetailPage onClick={() => {}} name="Hello" />
      <Button>Привет, мир!</Button>
      {sum(5, 6)}
    </div>
  );
}

export default App;
