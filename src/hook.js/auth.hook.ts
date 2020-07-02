import {useCallback, useEffect, useState} from "react";
import {API} from "../api/api";
import storageService from "../LocalStorageService";

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [auth, setAuth] = useState(false)

    let signIn = useCallback(({login, password, remember}) => {

        console.log(login, password)
        API.login({login, password}).then((response: any) => {
            console.log(response)
            if(response.data.success){
                if(remember){
                    storageService.setTokenLS(response.data.auth_key)
                }else{
                    storageService.setTokenSS(response.data.auth_key)
                }
            }
        })
    }, []);

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

    }, [])



    return {signIn, logout, token, auth}
}
