import React from 'react';
import ReactDOM from 'react-dom';

import TextField from 'material-ui/lib/text-field';
import Snackbar from 'material-ui/lib/snackbar';
import RaisedButton from 'material-ui/lib/raised-button';

import { Link } from 'react-router';
import { Box } from 'react-polymer-layout';

const dataSource2 = [];

const style = {
  width: 135,
  margin: '50px 12px',
  flex: 1,
}

const styleColor = {
  color: '#fff',
  fontSize: '16px',
}

const styleFlex = {
  flex: 1,
};

const styleInput = {
  color: '#fff',
}

const styleSnackBar = {
  background: '#fff',
  color: '#000',
  textAlign: 'center',
}

class ShowList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.handleUpdatePassWork = this.handleUpdatePassWork.bind(this);
    this.sublimeFrom = this.sublimeFrom.bind(this);
    
    this.state = {
      userName: 'Hello',
      userPassWord: '123',
      open: false,
    };
  }

  componentWillMount() {
    //console.log(this.props.actions)
  }

  handleUpdateInput(event) {
    this.setState({
      userName: event.target.value,
    })
  }

  handleUpdatePassWork(event) {
    this.setState({
      userPassWord: event.target.value,
    })
  }

  sublimeFrom() {
    if(this.state.userName === 'banana' && this.state.userPassWord === '123456'){
      //window.location.href = '/#/about';
      ReactDOM.findDOMNode(this.refs.linkTo).click()
    }else{
      this.setState({
        open: true,
      })
    }
  }

  render() {
    return (
     <div className="login-page">
        <div className="login-shelter"></div>
        <Box className="login-from" centerJustified center vertical>
          <TextField
            hintText="用户名"
            hintStyle={styleInput}
            inputStyle={styleColor}
            onChange={this.handleUpdateInput}
            style={styleFlex}
          /><br />
          <TextField
            hintText="密码"
            type="password"
            hintStyle={styleInput}
            inputStyle={styleColor}
            onChange={this.handleUpdatePassWork}
            style={styleFlex}
          />
          <RaisedButton label="登录" style={style} onClick={this.sublimeFrom} />
          <Snackbar
            open={this.state.open}
            message="密码或者账号错误"
            autoHideDuration={4000}
            style={styleSnackBar}
            onRequestClose={() => {this.setState({open:false})}}
          />
        </Box>
        <Link to="/about/moive" ref='linkTo'></Link>
     </div>
     );
  }
}

export default ShowList;