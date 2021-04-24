import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './App.css';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
    />
  );
}

function App() {
  return (
    <div className='App'>
      <ButtonGroup variant='contained' color='primary'>
        <CheckboxExample />
        <CheckboxExample />
        <CheckboxExample />
        <CheckboxExample />
        <br />
        <Button
          startIcon={<SaveIcon />}
          style={{ fontSize: 24 }}
          onClick={() => alert('Saved')}
        >
          Save, Button
        </Button>
        <Button
          endIcon={<DeleteIcon />}
          style={{ fontSize: 24 }}
          onClick={() => alert('Deleted')}
          color='secondary'
        >
          Discard, Button
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
