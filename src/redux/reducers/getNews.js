import setNews from '../actions/setNews'

const initialState = {
    title: '',
    subtitle: '',
    images: '',
    featuredImage: '',
    data: null,
    description: [],
    currentSequence: [],
    currentSections: []
}

const getNews = (state = initialState, action = setNews) => {
    switch (action.type) {
        case 'setNewsContent':
            return { ...state, title: action.title, subtitle: action.subtitle, images: action.images, featuredImage: action.featuredImage, data: action.data };
        case 'setNewsImages':
            return { ...state, images: action.images };
        case 'setFeaturedImage':
            return { ...state, images: action.featuredImage };
        case 'setDescription':
            return { ...state, description: action.description };
        case 'setCurrentPostToEdit':
            return { ...state, data: action.data };
        case 'setCurrentSequence':
            return { ...state, currentSequence: action.currentSequence };
        case 'setSections':
            return { ...state, currentSections: action.currentSections };
        default:
            return { ...state }
    }
}

export default getNews
