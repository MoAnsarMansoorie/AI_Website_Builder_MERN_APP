import { createContext } from "react";
import { useState, useContext, useEffect } from "react";
import api from "../api/api"

const AppContext = createContext();

export const AppContextProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [isLoading, setIsLoading] = useState(true);

    const checkSession = async () => {
        try {
            const {data} = await api.get("/api/auth/me")
            // setUser(data.user);
            
        } catch (error) {
            setUser(null);
                       
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        checkSession();
    }, [checkSession]);

    return (
        <AppContext.Provider value= {{user, setUser, isLoading, setIsLoading}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(AppContext);
    if(context === undefined) {
        throw new Error("useAppContext must be used within a AppContextProvider");
    }

    return context;
}