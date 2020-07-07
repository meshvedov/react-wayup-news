let initialState = {
    art: []
}

const reducer = (state = initialState, action) => {
    console.log( 'reducer-state: ', state )
    switch (action.type) {
        case 'NEWS_GET':
            return { art: action.data };

        default:
            return state;
    }
}

export default reducer;