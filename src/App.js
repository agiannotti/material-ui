import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import './App.css';

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
      }
      label='Yes!'
    />
  );
}

function App() {
  return (
    <div className='App'>
      <TextField
        variant='filled'
        type='email'
        placeholder='meow@nyan.com'
        label='email'
      />
      <TextField variant='outlined' type='time' label='TIME' />
      <TextField variant='outlined' color='secondary' type='date' />

      <CheckboxExample />
      <CheckboxExample />
      <CheckboxExample />
      <CheckboxExample />
      <ButtonGroup variant='contained' color='primary'>
        <br />
        <Button
          startIcon={<SaveIcon />}
          style={{ fontSize: 24 }}
          onClick={() => alert('Saved')}
        >
          Save Button
        </Button>
        <Button
          endIcon={<DeleteIcon />}
          style={{ fontSize: 24 }}
          onClick={() => alert('Deleted')}
          color='secondary'
        >
          Discard Button
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
