/**
 * ACTION TYPES
 */
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'
const SET_SINGLE_VIEW = 'SET_SINGLE_VIEW'

/**
 * INITIAL STATE
 */
const searchResultsObj = {
	singleView: 100,
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
export const resetSearchResults = () => ({type: GET_SEARCH_RESULTS, searchResults: {items: [null]}})
export const setSingleView = (index) => ({type: SET_SINGLE_VIEW, index})
export const resetSingleView = () => ({type: SET_SINGLE_VIEW, index: 100})

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
	case SET_SINGLE_VIEW:
		return Object.assign({}, state, {singleView: action.index})
	default:
		return state
	}
}
