import React from 'react';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import Snackbar from 'material-ui/lib/snackbar';

const style = {
  marginLeft: 20,
  marginTop: 30,
};

const styleButton = {
  marginLeft: 190,
  marginTop: 220,
  width: 150,
}

class FromText extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handelSublime = this.handelSublime.bind(this);

    this.state = {
      open: false,
      openSnackbar: false,
      name: '',
      phone: '',
      number: '',
      email: '',
    };
  }

  componentWillMount() {
  }

  handelSublime() {
    if( this.state.name !== '' ){
      this.setState({
        open: true,
      })
    }else{
      this.setState({
        openSnackbar: true,
      })
    }
  }

  render() {
    const actions = [
      <RaisedButton
        label="好的"
        secondary={true} 
        onTouchTap={()=>{this.setState({open:false})}}
      />,
    ];

    return (
      <div>
        <Paper zDepth={0}>
          <TextField hintText="姓名" style={style} onChange={ (value) => {this.setState({name: value})}} underlineShow={false} />
          <TextField hintText="电话" style={style} onChange={ (value) => {this.setState({name: value})}} underlineShow={false} />
          <TextField hintText="微信号" style={style} underlineShow={false} />
          <TextField hintText="Email" style={style} underlineShow={false} />
          <RaisedButton label="提交" secondary={true} style={styleButton} onMouseDown={this.handelSublime}/>
        </Paper>
        <Dialog
          title="订票成功"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          恭喜你订票成功，我们将会联系你的
        </Dialog>
        <Snackbar
          open={this.state.openSnackbar}
          message="表格填写错误！"
          autoHideDuration={4000}
          onRequestClose={()=>{this.setState({openSnackbar: false})}}
        />
      </div>
     );
  }
}

export default FromText;