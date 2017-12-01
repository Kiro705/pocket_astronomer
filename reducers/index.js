// INITIAL STATE
const initialState = {
	campuses: [],

}

// ACTION TYPES

export const GET_CAMPUSES = 'GET_CAMPUSES'

// REDUCER
const rootReducer = function(state = initialState, action) {
  switch (action.type) {
	case GET_CAMPUSES:
		return Object.assign({}, state, { campuses: action.campuses })

    default: return state
  }
};

export default rootReducer
