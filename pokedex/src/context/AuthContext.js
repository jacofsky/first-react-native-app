import React, { useState, createContext } from 'react'


export const AuthContext = createContext({
    user: undefined,
    login: () => {},
    logout: () => {}
})

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(undefined)
    
    const login = (userData) => {
        setAuth(userData)
    }

    const logout = () => {
        setAuth(undefined)
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
} 