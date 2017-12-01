import { createStore, applyMiddleware } from 'redux';
import rootReducer, { GET_CAMPUSES } from './reducers';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import axios from 'axios';

const loggerMiddleware = createLogger()

const middlewareArray = [thunkMiddleware, loggerMiddleware];


// ACTION CREATORS

// export function getCampuses (campuses) {
//   const action = { type: GET_CAMPUSES, campuses };
//   return action;
// }



// THUNK CREATORS

// export function fetchCampuses () {

//   return function thunk (dispatch) {
//     return axios.get('/api/campuses')
//       .then(res => res.data)
//       .then(campuses => {
//         const action = getCampuses(campuses);
//         dispatch(action);
//       });
//   }
// }


export default createStore(rootReducer, applyMiddleware.apply(null, middlewareArray))
