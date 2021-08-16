import React, {useState, useEffect, useReducer, useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AppContext } from "./App.jsx";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 345,
  },
  media: {
    height: 140,
  },
});

export default function MaterialCards({name, origin, price, img, stock, description }) {
  const classes = useStyles();
const [cartItems, setCartItems] = useState([]);
const [state, dispatch] = useContext(AppContext);
  console.log(name)
  useEffect(() =>{
      console.log(cartItems)
  },[cartItems])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
            
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Price: ${price}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
           Origin: {origin}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary" onClick={()=> dispatch({ type: "ADD_CART", payload: <MaterialCards />})}>
          Add TO Cart
        </Button> */}
        
      </CardActions>
    </Card>
  );
}