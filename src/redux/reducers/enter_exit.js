const initialState = {
    menuOpen: false
}

const enter_exit = (state = initialState, action) => {
    switch (action.type) {
        case 'open_menu':
            return { menuOpen: true };
        case 'close_menu':
            return { menuOpen: true };
        default:
            return { ...state }
    }
}
export default enter_exit;