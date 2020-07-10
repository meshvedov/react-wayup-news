let initialState = {
    art: []
}

const reducer = (state = initialState, action) => {
    console.log( 'reducer-state: ', state )
    switch (action.type) {
        case 'FETCH_NEWS_GET':
            return { ...state, art: action.data };

        default:
            return state;
    }
}

export default reducer;