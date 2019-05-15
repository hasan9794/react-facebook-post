import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from 'react-facebook-emoji';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false, emojis: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  showEmojis(e){
      this.setState({emojis: !this.state.emojis})
    }
    
    hideEmojis(e){
      this.setState({emojis: false})
  }

  render() {
    const { classes } = this.props;
    const {emojis} = this.state
    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              <img style={{width: 50}} src={this.props.avatar} />
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.createdBy}
          subheader={this.props.createdAt}
        />
        <FbImageLibrary 
            images={this.props.images}
        />
        
        <CardContent>
          <Typography component="p">
            {this.props.shortDescription}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <CardContent>
              <p style={{fontSize: 11, color: "#8a8a8a"}}>Hasan, Bial and 23 Others liked this</p>      
        </CardContent>  
          <IconButton aria-label="Add to favorites">
              <div>
               {/* {<img src="/images/thumb-up-hand-vector_20448-100.jpg" style={{margin:0, padding:0}} onMouseEnter={this.showEmojis.bind(this)} onMouseLeave={this.hideEmojis.bind(this)} />} */}
              </div> 
              <span style={{margin:0, padding:0}} onMouseEnter={this.showEmojis.bind(this)} onMouseLeave={this.hideEmojis.bind(this)}>
              {emojis && 
                  <div style={{
                  margin: 0, 
                  padding: 0 , 
                  bottom: "7%",
                  position: "absolute",
                  padding: "5px 10px",
                  borderRadius: "50px",
                  background: "#fafafa",
                  boxShadow: "1px 1px 5px grey"}}>
                      <FacebookEmoji size="sm" type="like"/>
                      <FacebookEmoji size="sm" type="love"/>
                      <FacebookEmoji size="sm" type="wow"/>
                      <FacebookEmoji size="sm" type="yay"/>
                      <FacebookEmoji size="sm" type="angry"/>
                      <FacebookEmoji size="sm" type="haha"/>
                      <FacebookEmoji size="sm" type="sad"/>
               </div> 
              }
              <FavoriteIcon />
              </span>
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              {this.props.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);