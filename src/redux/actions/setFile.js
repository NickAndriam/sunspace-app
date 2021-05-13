const setFile = (file, to, content) => {
    return {
        type: 'setFile',
        file: file,
    }, {
        type: 'setSingleForm',
        content: content,
        to: to
    }, {
        type: 'resetForms',
        content: '',
        to: null
    }
}
export default setFile