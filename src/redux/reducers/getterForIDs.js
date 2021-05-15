import setterForIDs from '../actions/setterForIDs'

const initialState = {
    id: ''
}

const getterForIDs = (state = initialState, action = setterForIDs) => {
    switch (action.type) {
        case 'setID':
            return { ...state, id: action.id };
        default:
            return { ...state }
    }
}

export default getterForIDs
