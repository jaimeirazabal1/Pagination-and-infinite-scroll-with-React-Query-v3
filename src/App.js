
import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Pagination from './Pagination';
import InfiniteScroll from './InfiniteScroll';
function App() {
  const [view, setView] = useState('pagination')
  return (
    <div >
      <h1>Welcome to Random Users</h1>

      <nav className='nav'>
        <button onClick={() => setView('pagination')}>Pagination</button>
        <button onClick={() => setView('infiniteScroll')}>Infinite Scroll</button>
      </nav>

      {view === 'pagination' ? <Pagination /> : <InfiniteScroll />}
    </div>
  );
}

export default App;
