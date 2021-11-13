
import { createContext, useReducer } from "react"
import Cookies from "js-cookie"
export const store = createContext()

const initialState={
    userInfo: Cookies.get("userInfo")  ?   JSON.parse( Cookies.get('userInfo')): null
}
function reducer(state, action){
    switch(action.type){
        case "USER_LOGIN":
        return {...state, userInfo:action.Payload};
        case "USER_LOGOUT":
        return {...state, userInfo:null};

    }
}
export function StoreProivder({children}){
    const[state,dispatach] = useReducer(reducer,initialState)
    const value = {state,dispatach}
    return(
        <store.Provider value={value}>
            {children}
        </store.Provider>
    )
}

