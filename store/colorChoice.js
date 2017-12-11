/**
 * ACTION TYPES
 */
const TOGGLE_COLOR_CHOICE = 'TOGGLE_COLOR_CHOICE'

/**
 * INITIAL STATE
 */
const colorChoice = false

/**
 * ACTION CREATORS
 */
export const toggleColorChoice = (bool) => ({type: TOGGLE_COLOR_CHOICE, colorChoice: bool})

/**
 * REDUCER
 */
export default function (state = colorChoice, action) {
	switch (action.type) {
	case TOGGLE_COLOR_CHOICE:
		return action.colorChoice
	default:
		return state
	}
}
