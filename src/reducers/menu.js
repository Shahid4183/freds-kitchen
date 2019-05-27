export default function (state = null, action) {
    switch (action.type) {
        case 'MENU_LIST':
            return { ...state, menu: action.payload };      
        default:
            return state;
    }
}