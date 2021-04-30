const initialState = {
    logoOpen: true,
    bottomOpen: false,
    headerOpen: false
}

const menu_animation = (state = initialState, action) => {
    switch (action.type) {
        case 'open_menu':
            return { logoOpen: false, bottomOpen: true, headerOpen: true };
        default:
            return { ...state }
    }
}
export default menu_animation;