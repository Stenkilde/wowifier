export const SEARCH_ADDED = 'counter/SEARCH_ADDED';
export const SEARCH_DELETED = 'counter/SEARCH_DELETED';
export const SEARCH_REQUESTED = 'counter/SEARCH_REQUESTED';

const initialState = {
    query: '',
    searchResult: []
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
                searchResult: action.searchResult
            }
        default:
            return state;
    }
}

export const searchQuery = () => {
    return dispatch => {
        dispatch({
            type: SEARCH_ADDED
        })
    }
}

export const searchQueryAsync = () => {
  return dispatch => {
    return setTimeout(() => {
      dispatch({
        type: SEARCH_ADDED
      })
    }, 3000)
  }
}