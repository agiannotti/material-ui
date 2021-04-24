import React from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Button
        startIcon={<SaveIcon />}
        style={{ fontSize: 24 }}
        onClick={() => alert('hello')}
        variant='contained'
        color='primary'
      >
        Hello, Button
      </Button>
    </div>
  );
}

export default App;
