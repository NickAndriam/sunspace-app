const initialState = {
    initState: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ready':
            return { initState: true }
        default:
            return { ...state }
    }
}

export default reducer;