/**
 * ACTION TYPES
 */
const SET_CATALOG_ITEM = 'SET_CATALOG_ITEM'
const RESET_CATALOG_ITEM = 'RESET_CATALOG_ITEM'

/**
 * INITIAL STATE
 */
const catalogItem = {
	title: 'MARS',
	temp: 'COLD',
	surface: 'ROCKY'
}

/**
 * ACTION CREATORS
 */
export const setCatalogItem = (newCatalogItem) => ({type: SET_CATALOG_ITEM, catalogItem: newCatalogItem})
export const resetCatalogItem = () => ({type: RESET_CATALOG_ITEM, catalogItem: {}})

/**
 * REDUCER
 */
export default function (state = catalogItem, action) {
	switch (action.type) {
	case SET_CATALOG_ITEM:
		return action.catalogItem
	case RESET_CATALOG_ITEM:
		return action.catalogItem
	default:
		return state
	}
}
