import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user : {
        _id: "6419eb86dea3f785e79b78b5",
        profilePicture:"person/1.jpeg",
        coverPicture:"",
        followers:[],
        followings:[],
        isAdmin:false,
        username: "Jane",
        email:"jane@gmail.com",
    },
    isFetching: false,
    error: false,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    // verilere erişebilmek için componentleri context ile sarmamız gerekiyor. Bütün komponentlerde kullanacagız auth contexti
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}