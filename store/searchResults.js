/**
 * ACTION TYPES
 */
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'
const RESET_SEARCH_RESULTS = 'RESET_SEARCH_RESULTS'

/**
 * INITIAL STATE
 */
const searchResultsObj = {
	topic: '',
	list: [null],
	//Results have ability to chain searches with next page item
	nextPage: '',
	prevPage: ''
}

/**
 * ACTION CREATORS
 */
const getSearchResultsAction = (searchResults, searchString) => ({type: GET_SEARCH_RESULTS, searchResults, searchString})
export const resetSearchResults = () => ({type: RESET_SEARCH_RESULTS, searchResults: {topic: '', list: [null], next: '', prevPage: ''}})

/**
 * THUNK CREATORS
 */
export const getSearchResults = (searchString) =>
	dispatch =>
		fetch(`https://images-api.nasa.gov/search?q=${searchString}&media_type=image`, {method: 'GET'})
			.then(data => data.json())
			.then(results => {
				dispatch(getSearchResultsAction(results.collection, searchString))
			})
			.catch((error) => console.error(error))

/**
 * REDUCER
 */
export default function (state = searchResultsObj, action) {
	switch (action.type) {
	case GET_SEARCH_RESULTS:
		return Object.assign({}, state, {topic: action.searchString, list: action.searchResults.items})
	case RESET_SEARCH_RESULTS:
		return Object.assign({}, state, action.searchResults)
	default:
		return state
	}
}
