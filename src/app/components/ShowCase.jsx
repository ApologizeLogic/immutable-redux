import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import ActionHome from 'material-ui/lib/svg-icons/action/home';
import {GridList, GridTile, IconButton} from 'material-ui';
import Subheader from 'material-ui/lib/Subheader';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import { Link } from 'react-router';

const styles = {
  appBar: {
    background: 'rgb(33, 33, 33)',
  },
}

class ShowCase extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handelMove = this.handelMove.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      open: false,
    };
  }

  componentWillMount() {
  }

  handelMove(title, index) {
    console.log(title, index)
  }

  handleClose() {
    this.setState({
      open: false,
    })
  }

  render() {
    return (
      <div style={styles.root}>
        <AppBar
          title={<span onClick={()=>{this.setState({open: true})}}>热门电影</span>}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          style={styles.appBar}
        />
        {this.props.children || "Hi I am iPhone SE"}
        <LeftNav
          docked={false}
          width={250}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar iconElementLeft={<IconButton><ActionHome /></IconButton>} title="我的电影" style={styles.appBar}/>
          <MenuItem onTouchTap={this.handleClose}><Link to="/about/moive" ref='linkTo'>我的信息</Link></MenuItem>
          <MenuItem onTouchTap={this.handleClose}><Link to="/about/cinema" ref='linkTo'>电影订票</Link></MenuItem>
        </LeftNav>
      </div>
     );
  }
}

// ShowCase.propTypes = {
//     states: React.PropTypes.object.isRequired,
//     actions: React.PropTypes.object.isRequired,
// };

export default ShowCase;