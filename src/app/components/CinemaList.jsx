import React from 'react';
import ReactDOM from 'react-dom';
import MobileTearSheet from './MobileTearSheet';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import Subheader from 'material-ui/lib/Subheader';
import Avatar from 'material-ui/lib/avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/lib/styles/colors';
import IconButton from 'material-ui/lib/icon-button';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import TimePicker from 'material-ui/lib/time-picker/time-picker';
import { Link } from 'react-router';

const cinema = [
  {
    img: 'https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg',
    name: '影院名称',
    description: '影院介绍和地址',
  },
]

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

class CinemaList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    ReactDOM.findDOMNode(this.refs.linkTo).click()
    this.setState({open: false});
  }

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
         <MobileTearSheet>
          <List>
            <Subheader>选择影院</Subheader>
            <ListItem
              leftAvatar={<Avatar src="https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg" />}
              primaryText="广州UME国际影城"
              secondaryText={
                <p>
                  海珠区宝岗大道广百新一城广场6楼(与江南西交界)
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg" />}
              primaryText={
                <p>哈艺时尚影城-白云YH城店</p>
              }
              secondaryText={
                <p>
                  广州市白云区鹤龙一路208号商业楼三层
                </p>
              }
              secondaryTextLines={2}
              onMouseEnter={this.handleOpen}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg" />}
              primaryText="广州华影梅花园影城"
              secondaryText={
                <p>
                  广州市白云区广州大道北28号梅花园商业广场5楼
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg" />}
              primaryText="正佳飞扬影城"
              secondaryText={
                <p>
                  天河路228号正佳广场七楼（体育中心站 D出口）
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="https://s-media-cache-ak0.pinimg.com/avatars/TommyHili_1460100425_140.jpg" />}
              primaryText="天娱广场天河电影城"
              secondaryText={
                <p>
                  广州市天河路623号岗顶天娱广场5楼
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
          <Link to="/about/from" ref='linkTo'></Link>
         </MobileTearSheet>
         <Dialog
            title="请选择观影日期"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            请选择合适的时间观看电影
            <DatePicker hintText="Date Picker" />
            <TimePicker hintText="12hr Format" />
          </Dialog>
     </div>
    );
  }
}

export default CinemaList;