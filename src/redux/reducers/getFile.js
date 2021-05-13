import setFile from '../actions/setFile'
const initialState = {
    file: '',
    to: '',
    content: '',
}

const getFile = (state = initialState, action = setFile) => {
    switch (action.type) {
        case 'setFile':
            return { ...state, file: action.file };
        case 'setSingleForm':
            return { ...state, content: action.content, to: action.to };
        case 'resetForm':
            return { ...state, content: action.content, to: action.to };
        default:
            return { ...state }
    }
}
export default getFile;