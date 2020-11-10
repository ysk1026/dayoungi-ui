import userReducer from './usr/user.action'
import movieReducer from './mov/movie.action'
import actorReducer from './act/actor.action'
import ratingReducer from './rat/rating.action'
import reviewReducer from './rev/review.action'

import { combineReducers } from 'redux'
const rootReducer = combineReducers({
    userReducer, movieReducer, actorReducer, ratingReducer, reviewReducer
})

export default rootReducer