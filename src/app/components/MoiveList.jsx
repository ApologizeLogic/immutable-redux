import React from 'react';
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import StarBorder from 'material-ui/lib/svg-icons/toggle/star-border';
import IconButton from 'material-ui/lib/icon-button';
import Subheader from 'material-ui/lib/Subheader';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
    marginTop: 2,
    marginBottom: 24,
  },
}

const tilesData = [
  {
    img: 'http://img04.sogoucdn.com/app/a/100520052/1cb78f22e48483be4b1345f110660a42',
    title: '叶问3',
    author: '04月08日',
  },
  {
    img: 'http://img04.sogoucdn.com/app/a/100520052/fc2784da91b42e6c8e9743a938363356',
    title: '旋风营救3',
    author: '04月15日',
  },
  {
    img: 'http://img04.sogoucdn.com/app/a/100520052/9391f20af3baa733b057ca7e0d917b66',
    title: '疯狂动物城',
    author: '04月08日',
  },
  {
    img: 'http://img03.sogoucdn.com/app/a/100520052/826899bce878e27f41353850178b6dab',
    title: '功夫熊猫3',
    author: '04月15日',
  },
  {
    img: 'http://img01.sogoucdn.com/app/a/100520052/8a7f466435825237ded85c4db8bb00cb',
    title: '小黄人',
    author: '04月08日',
  },
  {
    img: 'http://img03.sogoucdn.com/app/a/100520052/3697095b5994b2f3416981001ef21e98',
    title: '生死狙击',
    author: '04月15日',
  },
  {
    img: 'http://img04.sogoucdn.com/app/a/07/fa755ee2444703ff717221998cbbb8b0',
    title: '火星救援',
    author: '04月15日',
  },
  {
    img: 'http://img01.sogoucdn.com/app/a/100520052/503b1155ec848c23be84917cd008d491',
    title: '废柴特工',
    author: '04月15日',
  },
];

class MoiveList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  render() {
    return (
      <GridList
          cellHeight={200}
          style={styles.gridList}
        >
        {tilesData.map((tile, index) => (
          <GridTile
            key={tile.img}
            title={tile.title}
            subtitle={<span><b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    );
  }
}

export default MoiveList;