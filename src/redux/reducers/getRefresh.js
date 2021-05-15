import setRefresh from '../actions/setRefresh'
const initialState = {
    refresh: 1
}

const getRefresh = (state = initialState, action = setRefresh) => {
    switch (action.type) {
        case 'refresh':
            return { ...state, refresh: state.refresh + 1 };
        default:
            return { ...state }
    }
}
export default getRefresh;