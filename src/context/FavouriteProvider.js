import React,{useEffect} from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducers from "../context/reducers";
import InitialState  from "./store";

const FavouriteProvider=({children})=>{

    const store=legacy_createStore(reducers,InitialState );
    return(
        <Provider store={store}>{children}</Provider>
    )
}

export default FavouriteProvider;