
const setNews = (title, description, images, featuredImage, data, currentSequence, currentSections) => {
    return {
        type: 'setNewsContent',
        title,
        description,
        featuredImage,
        images,
        data
    }, {
        type: 'setNewsImages',
        images
    }, {
        type: 'setFeaturedImage',
        featuredImage
    }, {
        type: 'setDescription',
        description
    }, {
        type: 'setCurrentPostToEdit',
        data
    },
    {
        type: 'setCurrentSequence',
        currentSequence
    },
    {
        type: 'setSections',
        currentSections
    }
}

export default setNews