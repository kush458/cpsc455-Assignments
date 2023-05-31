import React from 'react';
import './App.css';
import Form from './components/form';
import Inventory from './components/inventory';

function App() {
  return (
    <div className='wrapper'>
      <header className="header">
          <img src={require('./assets/favicon.png')} alt='logo'/>
          <p>Inventory App</p>
      </header>
      <aside className="aside aside-1">
          <Form />
      </aside>
      <Inventory />
    </div>
  );
}

export default App;
