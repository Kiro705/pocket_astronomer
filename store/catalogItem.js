/**
 * ACTION TYPES
 */
const SET_CATALOG_ITEM = 'SET_CATALOG_ITEM'

/**
 * INITIAL STATE
 */
const catalogItem = {}

/**
 * ACTION CREATORS
 */
export const setCatalogItem = (newCatalogItem) => ({type: SET_CATALOG_ITEM, catalogItem: newCatalogItem})

/**
 * REDUCER
 */
export default function (state = catalogItem, action) {
	switch (action.type) {
	case SET_CATALOG_ITEM:
		return action.catalogItem
	default:
		return state
	}
}
