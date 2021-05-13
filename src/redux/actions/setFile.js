const setFile = (file, uploadFilesTo, content, files, to) => {
    return {
        type: 'setFile',
        file: file,
    }, {
        type: 'setSingleForm',
        content,
        to
    }, {
        type: 'resetForms',
        content: '',
        to: null
    }, {
        type: 'setMultipleFiles',
        files,
    }, {
        type: 'setPathToUpload',
        uploadFilesTo
    }
}
export default setFile