import React, {useEffect} from "react";
import {useMess} from "../hook.js/mess.hook";
import {initialData} from "../initialData";

export const Messages = () => {
    const {getMessage, messages} = useMess()
    let data: object[] = messages;

    useEffect(() => {
        getMessage()
    }, []);

console.log(messages);
    if(messages === []){
        data = initialData;
    }

    return (
        <div>
            {data.map((m: any) => {
                return (
                <div key={m.id}>
                    <p>{m.user_id}</p>
                    <p>{m.message}</p>
                </div>
            )}

            )}
        </div>
    )
}
