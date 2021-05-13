import setNotification from '../actions/setNotification'
const initialState = {
    isOpen: false,
    msg: true,
    status: ''
}

const getNotification = (state = initialState, action = setNotification) => {
    switch (action.type) {
        case 'success':
            return { ...state, isOpen: true, msg: action.msg, status: 1 };
        case 'error':
            return { ...state, isOpen: true, msg: action.msg, status: 0 };
        case 'close':
            return { ...state, isOpen: false, msg: action.msg };
        default:
            return { ...state }
    }
}
export default getNotification;