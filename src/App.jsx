import React from 'react';
import './App.css';
import SideBar from './components/sidebar';
import Main from './components/Main';
import Filter from './components/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <SideBar />
      <div className="row" style={{ width: '99vw' }}>
        <div className="col-md-9">
          <Main />
        </div>
        <div className="col-md-3">
          <Filter />
        </div>
      </div>
    </>
  );
}

export default App;
