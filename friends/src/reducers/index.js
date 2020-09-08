export default function reducer(initialState, action){
    switch(action.type){
        case "SET_FRIENDS":
            return {
                ...initialState,
                friends: action.payload
            }
        default: 
            return initialState;
    }
}