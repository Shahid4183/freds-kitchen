import React, { Component } from 'react';
import Header from '../components/header/header'
import Typography from '@material-ui/core/Typography';
import './app.css'
import Menu from '../components/menu/menu'

class App extends Component {

    render() {        
        return (
            <div className="main">
                <Header/>
                <div className="container">
                    <div >
                        <div className="poster">
                            <img src="images/logo.png" alt="" width="250px" height="250px"/>
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
                        <Menu/>
                    </div>
                </div>                   
            </div>
        );
    }
}
export default App;
