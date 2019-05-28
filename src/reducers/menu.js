export default function (state = null, action) {
    switch (action.type) {
        case 'MENU_LIST':        
            return { ...state, menu: action.payload };      
        case 'ADD_TO_CART':
            return { ...state, cart: action.payload };
        default:
            return state;
    }
}