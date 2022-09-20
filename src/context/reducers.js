export default function reducers(state,action){
    switch(action.type){
        case "ADD_FAVOURITE":
            const favorites=action.payload.fav;           
            return {...state, favorites:[...state.favorites,favorites]};
        default:
            return state;
    }
}