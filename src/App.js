import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import '@fontsource/roboto';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';

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
    marginBottom: 16,
    color: 'white',
    padding: '15px 30px',
  },
});

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 18,
    },
  },
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
      <Container maxWidth='sm'>
        <div className='App'>
          <header className='App-header'>
            <AppBar color='secondary'>
              <Toolbar>
                <IconButton>
                  <Menu />
                  <Typography variant='h6'></Typography>
                  <Button>Login</Button>
                </IconButton>
              </Toolbar>
            </AppBar>
            <Typography variant='h2' component='div'>
              Welcome to MUI
            </Typography>
          </header>
          <header className='App-header'>
            <Typography variant='subtitle1' component='div'>
              Typographic!
            </Typography>
          </header>

          <ButtonStyled />

          <Grid container spacing={4} justify='center'>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
            <Grid item xs={3} sm={6} lg={12}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>

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
      </Container>
    </ThemeProvider>
  );
}

export default App;
