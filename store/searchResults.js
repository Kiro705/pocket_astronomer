
/**
 * ACTION TYPES
 */
const GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS'

/**
 * INITIAL STATE
 */
const searchResults = [null]
//Results have ability to chain searches with next page item
const nextPage = ''
const prevPage = ''

/**
 * ACTION CREATORS
 */
const getSearchResultsAction = searchResults => ({type: GET_SEARCH_RESULTS, searchResults})
export const resetSearchResults = () => ({type: GET_SEARCH_RESULTS, yelpList: [null]})

/**
 * THUNK CREATORS
 */
export const getSearchResults = (searchString) =>
	dispatch =>

		fetch(`https://images-api.nasa.gov/search?q=${searchString}&media_type=image`, {method: 'GET'})
			.then(data => data.json())
			.then(results => {
				dispatch(getSearchResultsAction(results.collection.items))
			})
			.catch((error) => console.error(error))

/**
 * REDUCER
 */
export default function (state = searchResults, action) {
	switch (action.type) {
	case GET_SEARCH_RESULTS:
		return action.searchResults
	default:
		return state
	}
}
