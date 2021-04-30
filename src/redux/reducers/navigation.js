const initialState = {
    home: false,
    about: false,
    gallery: false,
    news: false
}

const navigation = (state = initialState, action) => {
    switch (action.type) {
        case 'home':
            return { home: true, about: false, gallery: false, news: false };
        case 'about':
            return { home: false, about: true, gallery: false, news: false };
        case 'gallery':
            return { home: false, about: false, gallery: true, news: false };
        case 'news':
            return { home: false, about: false, gallery: false, news: true };
        default:
            return { ...state }
    }
}
export default navigation;