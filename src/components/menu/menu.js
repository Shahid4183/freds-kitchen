import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ReactPlaceholder from 'react-placeholder';
import Button from '@material-ui/core/Button';
import './menu.css'
import { AddToCart,GetMenuList } from '../../actions/index'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

class Menu extends Component {
  constructor(props){
    super(props)
    this.props.GetMenuList()
    this.state = {
        cart:new Map()
    }
  }
  addToCart=(key)=>{
    let cart = this.state.cart
    if (cart[key.title]) {
        let item = cart[key.title]        
        cart[key.title] = {
            price: item.price + key.price,
            count: item.count + 1
        }
    }else{
        cart[key.title] = {
        	price: key.price,
        	count: 1
        }
    }
    this.setState({cart:cart})
    this.props.AddToCart(this.state.cart)
  }
  render() {
    var {menu} = this.props
    return (
        <div className="menu">
        <Grid container className="menuRoot row"> 
            <Grid item xs={12}>
                <Grid container justify="center">
                {   menu ?
                    menu.map((key,value) =>(
                    <Grid className="cardHolder col-sm-3" key={value}>
                        <Card className="">
                            <CardHeader title={key.title}/>                            
                            <CardContent className="contentHolder">
                            <ReactPlaceholder 
                                    type='textRow'                                                                                                             
                                    firstLaunchOnly={true}
                                    ready={true}
                                    color='#E0E0E0'>
                            <img 
                                    src={key.image} 
                                    alt="product" 
                                    className ="mediaHolder"/></ReactPlaceholder>
                                {key.description}
                            </CardContent>
                            <CardActions>
                                <Button onClick={(e)=>this.addToCart(key)}>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )):<div>No Menu Found</div>                             
                }
                </Grid>
            </Grid> 
        </Grid>
    </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
        menu: state.menu ? state.menu.menu : null,
        cart: state.cart
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ AddToCart,GetMenuList }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Menu)