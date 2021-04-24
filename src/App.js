import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ButtonGroup>
        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          style={{ fontSize: 24 }}
          onClick={() => alert('hello')}
          variant='contained'
          color='primary'
        >
          Save, Button
        </Button>
        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          style={{ fontSize: 24 }}
          onClick={() => alert('hello')}
          variant='contained'
          color='primary'
        >
          Discard, Button
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
