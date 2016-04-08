import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import {grey50, grey700, grey100} from 'material-ui/lib/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey50,
    primary2Color: grey100,
    primary3Color: grey50,
  },
}, {
  avatar: {
    borderColor: null,
  },
  //userAgent: req.headers['user-agent'],
})

class Main extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
     <MuiThemeProvider muiTheme={muiTheme}>
        {this.props.children || "Hi I am apple"}
     </MuiThemeProvider>
     );
  }
}

export default Main;
