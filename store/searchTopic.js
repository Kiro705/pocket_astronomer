import { NavigationActions } from 'react-navigation'

/**
 * ACTION TYPES
 */
const WRITE_SEARCH_TOPIC = 'WRITE_SEARCH_TOPIC'
const RESET_SEARCH_TOPIC = 'RESET_SEARCH_TOPIC'

/**
 * INITIAL STATE
 */
const searchTopic = ''

/**
 * ACTION CREATORS
 */
export const writeSearchTopic = (searchTopic) => ({type: WRITE_SEARCH_TOPIC, searchTopic})
export const resetSearchTopic = () => ({type: RESET_SEARCH_TOPIC, searchTopic: ''})

export const setParamsAction = NavigationActions.setParams({
  params: { title: searchTopic },
  key: 'SearchResults',
})

/**
 * REDUCER
 */
export default function (state = searchTopic, action) {
	switch (action.type) {
	case WRITE_SEARCH_TOPIC:
		return action.searchTopic
	case RESET_SEARCH_TOPIC:
		return action.searchTopic
	default:
		return state
	}
}
