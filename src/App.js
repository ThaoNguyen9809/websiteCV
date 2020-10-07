import React from 'react';
import './App.scss';
import Login from './components/Login'
import Registration from './components/Registration'

function App() {
  return (
    <div className="App">
      {/* <h1> Đăng nhập </h1>
      <Login /> */}
      <Registration />
    </div>
  );
}

export default App;
