import React from 'react';
import './App.css';
import DataTable from './DataTable';
import SearchBar from './SearchBar';
import ErrorMsg from './ErrorMsg';
import './bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <DataTable />
      <ErrorMsg />
      <SearchBar />

    </div>
  );
}

export default App;
