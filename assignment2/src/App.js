import React from 'react';
import './App.css';
import Form from './components/form';

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
      <div class="inventory">
          <div class="searchBar">
              <input type="text" id="searchInput" placeholder="Search...🔍"/>
          </div>
      </div>
    </body>
  );
}

export default App;
