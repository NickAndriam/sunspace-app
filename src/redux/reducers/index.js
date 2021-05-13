import { combineReducers } from 'redux'

//all reducer imports 
import reducer from './reducer';
import menu_animation from './menu_animation'
import enter_exit from './enter_exit'
import navigation from './navigation'
import getFile from './getFile'
import getNotification from './getNotification'
import getCategory from './getCategory'



const rootReducer = combineReducers({
    reducer,
    menu_animation,
    enter_exit,
    navigation,
    getFile,
    getNotification,
    getCategory
})

export default rootReducer;