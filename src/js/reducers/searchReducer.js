const defaultState = {
  searchText: ''
};

export default function searchReducer (state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'SEARCH_MOVIE': {
      return {
        state
      };
    }

    default: {
      return state;
    }
  }
}