import React from 'react';
import './Food.css';
// Contents Design M-ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const Food = (props) => {
    const foods = props.foods;
    const { strMealThumb, strMeal, strArea, strCategory, strTags, strInstructions, strYoutube } = foods;
    const classes = useStyles(); // For the M-ui card

    return (
        <div className="foods-container">
            <Card className={classes.root}>
                <a href={strYoutube} style={{textDecoration: 'none', color: 'gray'}}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={strMealThumb}
                            title="Click to watch video"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{strMeal}</Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p"><span>Categories: {strCategory}</span> <span>Tags: {strTags}</span></Typography> */}
                            {/* <Typography variant="body2" color="textSecondary" component="p">{strInstructions}</Typography> */}
                            <Typography variant="body2" color="textSecondary" component="p">Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica</Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button size="small" color="primary">Show detail</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Food;