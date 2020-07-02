import {useCallback, useEffect, useState} from "react";
import {API} from "../api/api";
import {initialData} from "../initialData";

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
