import React,{Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class Header extends Component {
    constructor(){        
    }
    render(){
        return (
        <div >
            <AppBar position="static">
            <Tabs>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
            </AppBar>
        </div>
        );
    }
}

export default Header;