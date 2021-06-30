import { combineReducers } from "redux";
import {ProjectReducer} from './projectReducer'
import {TaskReducer} from './taskReducer'

 export const store=combineReducers({
    projects:ProjectReducer,
    task:TaskReducer,
})
