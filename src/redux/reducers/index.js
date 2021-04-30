import { combineReducers } from 'redux'

//all reducer imports 
import reducer from './reducer';
import menu_animation from './menu_animation'
import enter_exit from './enter_exit'
import navigation from './navigation'


const rootReducer = combineReducers({ reducer, menu_animation, enter_exit, navigation })

export default rootReducer;