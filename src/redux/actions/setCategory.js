const setCategory = (data,
    currentCategory,
    categoryList,
    path, label,
    value,
    folderPath,
    id,
    oldPath,
    newPath) => {

    return {
        type: 'setCategoryList',
        categoryList
    },
    {
        type: 'setCurrentCategory',
        currentCategory,
    },
    {
        type: 'setCategoryData',
        data,
    },
    {
        type: 'setCategoryPath',
        path,
    },
    {
        type: 'addNewCategory',
        label,
        value,
        folderPath
    },
    {
        type: 'setSelectedCategory',
        label,
        value,
        folderPath,
        id
    }
}
export default setCategory