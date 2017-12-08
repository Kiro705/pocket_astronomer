/**
 * ACTION TYPES
 */
const SET_SINGLE_RESULT = 'SET_SINGLE_RESULT'
const RESET_SINGLE_RESULT = 'RESET_SINGLE_RESULT'

/**
 * INITIAL STATE
 */
const singleResult = {}

/**
 * ACTION CREATORS
 */
export const setSingleResult = (theSingleResult) => ({type: SET_SINGLE_RESULT, singleResult: theSingleResult})
export const resetSingleResult = () => ({type: RESET_SINGLE_RESULT, singleResult: {} })

/**
 * REDUCER
 */
export default function (state = singleResult, action) {
	switch (action.type) {
	case SET_SINGLE_RESULT:
		return action.singleResult
	case RESET_SINGLE_RESULT:
		return action.singleResult
	default:
		return state
	}
}
