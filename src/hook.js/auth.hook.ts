import {useCallback, useEffect, useState} from "react";
import {API} from "../api/api";
import storageService from "../storageService";

export const useAuth = () => {
    const [auth, setAuth] = useState(false)

    let signIn = useCallback(({login, password, remember}) => {

        API.login({login, password}).then((response: any) => {
            if(response.data.success){
                setToken(response.data.auth_key, remember);
            }
        })
    }, []);

    const setToken = (token:string, remember:boolean) => {
        if(remember){
            storageService.setTokenLS(token)
        }else{
            storageService.setTokenSS(token)
        }
    }

    useEffect(() => {
        let token: string | null
        token = storageService.getToken()
        if(token){
            setAuth(true)
        }else {
            setAuth(false)
        }
    }, [signIn])

    const logout = useCallback(() => {
        storageService.clearToken()
        setAuth(false);

    }, [])

    return {signIn, logout, auth}
}
