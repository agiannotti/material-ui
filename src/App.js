import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import './App.css';
import { grey, purple } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6b8b, #FF8E53)',
    border: 0,
    borderRadius: 15,
    marginBottom: 14,
    color: 'white',
    padding: '15px 30px',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[200],
    },
    secondary: {
      main: purple[200],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Button!</Button>;
}

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
    <ThemeProvider theme={theme}>
      <div className='App'>
        <ButtonStyled />
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
    </ThemeProvider>
  );
}

export default App;
