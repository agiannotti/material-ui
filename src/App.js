import React from 'react';
import { Button } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Button
        onClick={() => alert('hello')}
        variant='contained'
        color='secondary'
      >
        Hello, Button
      </Button>
    </div>
  );
}

export default App;
