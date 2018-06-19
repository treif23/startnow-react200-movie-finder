const defaultState = {
};

export default function reducers(state = defaultState, action) {
    const { type, payload } = action;
    //action.type?
    switch (type) {
        case 'SEARCH_CITY': {
            //update your store with whatever is typed
            return {
                ...state,
                searchText: payload.searchText
            };
        }
    }
}