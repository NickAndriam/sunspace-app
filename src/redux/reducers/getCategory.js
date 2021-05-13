import setCategory from '../actions/setCategory'
const initialState = {
    currentCategory: 'field-trip',
    path: '/media/gallery/field-trip',
    categoryList: [{ id: 1, label: "", value: "", path: "", }],
    data: [],
    label: '',
    value: '',
    folderPath: '',
    id: 1,
    oldPath: '',
    newPath: ''
}

const getCategory = (state = initialState, action = setCategory) => {
    switch (action.type) {
        case 'setCategoryList':
            return { ...state, categoryList: action.categoryList };
        case 'setCurrentCategory':
            return { ...state, currentCategory: action.currentCategory };
        case 'setCategoryData':
            return { ...state, data: action.data };
        case 'setCategoryPath':
            return { ...state, path: action.path };
        case 'addNewCategory':
            return { ...state, label: action.label, value: action.value, folderPath: action.folderPath };
        case 'setSelectedCategory':
            return { ...state, label: action.label, value: action.value, folderPath: action.folderPath, id: action.id, oldPath: action.oldPath, newPath: action.newPath };
        default:
            return { ...state }
    }
}
export default getCategory;