import { fetchAll } from '../services/Mock.js';

export const SEARCH_ADDED = 'search/SEARCH_ADDED';
export const SEARCH_DELETED = 'search/SEARCH_DELETED';
export const SEARCH_REQUESTED = 'search/SEARCH_REQUESTED';
export const REQUESTING_SEARCH = 'search/REQUESTING_SEARCH';

const initialState = {
    query: '',
    searchResult: [],
    isSearching: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ADDED:
            return {
                ...state,
                query: action.query
            }
        case SEARCH_DELETED:
            return {
                ...state,
                query: action.query
            }
        case SEARCH_REQUESTED:
            return {
                ...state,
                query: action.query,
                searchResult: action.results,
                isSearching: action.searching
            }
        case REQUESTING_SEARCH:
            return {
                ...state,
                isSearching: action.searching
            }
        default:
            return state;
    }
}

export const searchQuery = (event) => {
    return dispatch => {
        dispatch({
            query: event.target.value,
            type: SEARCH_ADDED
        })
    }
}

export const searchQueryAsync = () => {
  return dispatch => {
    dispatch({
      type: REQUESTING_SEARCH,
      searching: true
    })

    fetchAll().then((response) => {
        dispatch({
            type: SEARCH_REQUESTED,
            results: response,
            searching: false
        })
    });
  }
}