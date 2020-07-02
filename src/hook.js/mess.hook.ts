import {useCallback, useEffect, useState} from "react";
import {API} from "../api/api";
import {initialData} from "../initialData";
import {useAuth} from "./auth.hook";

export const useMess = () => {
    const [messages, setMessages] = useState(initialData)

    let getMessage = useCallback(() => {

        API.getMessage().then((response: any) => {
            if(response.data){
                setMessages(response.data);
            }
        })
    }, []);

    return {getMessage, messages}
}
