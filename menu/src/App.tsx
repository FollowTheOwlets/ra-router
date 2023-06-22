import React from 'react';
import './App.css';
import { Menu } from './components/Menu';
import { PageContent } from './components/PageContent';

function App() {
  return (
    <div className="app">
      <Menu />
      <PageContent />
    </div>
  );
}

export default App;
