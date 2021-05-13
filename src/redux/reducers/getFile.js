import setFile from '../actions/setFile'
const initialState = {
    file: '',
    to: '',
    content: '',
    files: [],
    uploadFilesTo: ''
}

const getFile = (state = initialState, action = setFile) => {
    switch (action.type) {
        case 'setFile':
            return { ...state, file: action.file };
        case 'setSingleForm':
            return { ...state, content: action.content, to: action.to };
        case 'resetForm':
            return { ...state, content: action.content, to: action.to };
        case 'setMultipleFiles':
            return { ...state, files: action.files, uploadFilesTo: action.uploadFilesTo };
        case 'setPathToUpload':
            return { ...state, files: action.files, uploadFilesTo: action.uploadFilesTo };
        default:
            return { ...state }
    }
}
export default getFile;