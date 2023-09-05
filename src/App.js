import React from 'react';
import Form from './components/Form';
import Settings from './components/Settings';
import Banner from './components/Banner';
import Profile from './components/Profile';
import './index.css';
function App() {
  return (
    <div>
      <Profile/>
      <Banner/>
      <Settings/>
      <Form/>
    </div>
  );
}

export default App;
