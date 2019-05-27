import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import './header.css';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Typography from '@material-ui/core/Typography';

export default class Header extends Component {
  render() {
    return (
      <div>
        <AppBar position="absolute" className="headerMain">
            <Toolbar>              
            <Typography variant="title" color="inherit" className="typo">
             </Typography>
                <Button 
                    color="inherit" 
                    onClick={()=>console.log("Hello Cart")}>
                <FontAwesomeIcon icon={faShoppingCart}/>
                <span className="cartCount">{0}</span>
                </Button>                
            </Toolbar>            
        </AppBar>
      </div>
    )
  }
}
