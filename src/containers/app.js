import React, { Component } from 'react';
import Header from '../components/header/header'
import './app.css'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

class App extends Component {
    render() {
        return (
            <div className="main">
                <Header/>
                <div className="container">
                    <div >
                        <div className="poster">
                            <img src="images/logo.png" width="250px" height="250px"/>
                            <Typography variant="caption">
                                Welcome to
                            </Typography>
                            <Typography variant="h3">
                                <b><i>Fred's Kitchen</i></b>
                            </Typography>
                            <Typography variant="caption">
                                <i>Since 1990</i>
                            </Typography>
                        </div>
                        <div className="description">
                        <Typography variant="subtitle1">
                            <p>
                            Welcome to Fred's Kitchen home delivery services.
                            We makes lip smacking hamburgers and fries in the town. We are top rated restaurant in the town.
                            It has been two decades since we are making people happy with our food. We provide best in quality 
                            <b><i>HAMBURGERS, FRIES, COKE AND PEPSI.</i></b> Now you can enjoy our hamburgers and fries at your place
                            at no extra cost. We have started our new home delivery service with which you can order our hamburgers, fries,
                            pepsi and coke from your home or office.
                            </p>
                        </Typography>
                        </div>
                        <div className="menu">
                            <Grid container className="menuRoot" spacing={2} xs="12">
                                <Grid>
                                    <Card>
                                        <CardContent>
                                            This is card content
                                        </CardContent>
                                        <CardActions>
                                            <Button>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid> 
                                <Grid>
                                    <Card>
                                        <CardContent>
                                            This is card content
                                        </CardContent>
                                        <CardActions>
                                            <Button>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid> 
                                <Grid>
                                    <Card>
                                        <CardContent>
                                            This is card content
                                        </CardContent>
                                        <CardActions>
                                            <Button>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid> 
                                <Grid>
                                    <Card>
                                        <CardContent>
                                            This is card content
                                        </CardContent>
                                        <CardActions>
                                            <Button>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid> 
                                <Grid>
                                    <Card>
                                        <CardContent>
                                            This is card content
                                        </CardContent>
                                        <CardActions>
                                            <Button>Add to Cart</Button>
                                        </CardActions>
                                    </Card>
                                </Grid> 
                            </Grid>
                        </div>
                    </div>
                </div>                   
            </div>
        );
    }
}

export default App;
