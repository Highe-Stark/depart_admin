import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Button from '@material-ui/core/Button';
import PersistentDrawer from './PersistentDrawer';
import {createMuiTheme, MuiThemeProvider, withStyles} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
    typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subheading: {
      fontSize: 12,
    },
    button: {
      fontStyle: 'italic',
    },
  },
  palette: {
    primary: { main: purple[500] }, // Purple and green play nicely together.
    secondary: { main: '#11cb5f' }, // This is just green.A700 as hex.
  },
})

class Root extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <div>
                <PersistentDrawer theme={theme}/>
                {/*<div>
                    Toolbar and page content go inside here.
                    <div>
                        <Button variant="raised" color="primary">Hello World</Button>
                    </div>
                </div>*/}
            </div>
            </MuiThemeProvider>
        );
    }
}

ReactDom.render(<Root/>, document.getElementById("root"));