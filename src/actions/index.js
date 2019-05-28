var axios = require('axios')
export function GetMenuList(){
    var response = axios.get("http://localhost:8081/menu").then(
        response => response.data
    )
        .catch(response => response = {
            success: 500,
            message: "Data Not Found!",
            data: ""
        }
        );
    return {
        type:"MENU_LIST",
        payload:response
    }
}

export function AddToCart(data) {	
	return {
		type: "ADD_TO_CART",
		payload: data
	}
}