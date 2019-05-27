import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import './menu.css'

export default class Menu extends Component {
  render() {
    var {menu} = this.props
    return (
        <div className="menu">
        <Grid container className="menuRoot"> 
            <Grid item xs={12}>
                <Grid container justify="center">
                { 
                    menu.map((key,value) =>(
                    <Grid className="cardHolder" key={value}>
                        <Card>
                            <CardHeader title={key.title}/>
                            <CardMedia 
                                image={key.image}
                                title={key.title}
                                style={{height:0,paddingTop:"70%"}}
                            />
                            <CardContent>
                                {key.description}
                            </CardContent>
                            <CardActions>
                                <Button>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Grid> 
        </Grid>
    </div>
    )
  }
}
