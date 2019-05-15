import React from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import logo from './logo.svg';
import './App.css';
import * as moment from 'moment';
import RecipeReviewCard from './components/card'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function App() {

  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvQZAP37ISz6Hh9l-9g71FwE4aYKw0rWpaVOiEtRsjO7c3Fmg-',
    'https://secure.i.telegraph.co.uk/multimedia/archive/03350/gardening-music_3350010b.jpg',
    'https://secure.i.telegraph.co.uk/multimedia/archive/03350/gardening-music_3350010b.jpg',
    'https://secure.i.telegraph.co.uk/multimedia/archive/03350/gardening-music_3350010b.jpg',
    'https://secure.i.telegraph.co.uk/multimedia/archive/03350/gardening-music_3350010b.jpg',
    
  ]
  return (
    <div className="col-sm">
      <div>
          <RecipeReviewCard 
            profileImage = "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/42792829_2481494735224033_889299822182400000_n.jpg?_nc_cat=104&_nc_ht=scontent.fkhi6-1.fna&oh=db279c89093ef863053805388add86e8&oe=5D57C775"
            title= "Muhammad Hasan"
            date = "4 Hours Ago"
            images = {images}
            shortDescription = "This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like."
            
            description = "Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."
          />             
      </div>
    </div>
  );
}

export default App;
