import React from 'react';
import './App.css'; // Подключение стилей
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className='flex'>
        <div className='w-1/12'>
          <Sidebar />
        </div>
        <div className='flex-1 p-5'>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
