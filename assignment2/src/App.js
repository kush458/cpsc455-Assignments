import React from 'react';
import './App.css';
import Form from './components/form';
import Inventory from './components/inventory';

function App() {
  return (
    <body className='wrapper'>
      <header class="header">
          <img src={require('./assets/favicon.png')} alt='logo'/>
          <p>Inventory App</p>
      </header>
      <aside class="aside aside-1">
          <Form />
      </aside>
      <Inventory />
    </body>
  );
}

export default App;
