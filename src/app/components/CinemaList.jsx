import React from 'react';
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

const cinema = [
  {
    img: 'http://img1.maka.im/JHW037HA6PTX83Q4YVF3',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'http://img1.maka.im/JHW037HA6PTX83Q4YVF3',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'http://img1.maka.im/JHW037HA6PTX83Q4YVF3',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'http://img1.maka.im/JHW037HA6PTX83Q4YVF3',
    name: '影院名称',
    description: '影院介绍和地址',
  },
  {
    img: 'http://img1.maka.im/JHW037HA6PTX83Q4YVF3',
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
              leftAvatar={<Avatar src="http://img1.maka.im/JHW037HA6PTX83Q4YVF3" />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://img1.maka.im/JHW037HA6PTX83Q4YVF3" />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
              onMouseEnter={this.handleOpen}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://img1.maka.im/JHW037HA6PTX83Q4YVF3" />}
              primaryText="Oui oui"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Grace Ng</span> --
                  Do you have Paris recommendations? Have you ever been?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://img1.maka.im/JHW037HA6PTX83Q4YVF3" />}
              primaryText="Birdthday gift"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Kerem Suer</span> --
                  Do you have any ideas what we can get Heidi for her birthday? How about a pony?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="http://img1.maka.im/JHW037HA6PTX83Q4YVF3" />}
              primaryText="Recipe to try"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Raquel Parrado</span> --
                  We should eat this: grated squash. Corn and tomatillo tacos.
                </p>
              }
              secondaryTextLines={2}
            />
          </List>
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
          </Dialog>
     </div>
    );
  }
}

export default CinemaList;