import React, {useEffect} from "react";
import {useMess} from "../hook.js/mess.hook";
import {useAuth} from "../hook.js/auth.hook";

export const Messages = () => {
    const {getMessage, messages} = useMess()
    const {logout} = useAuth();

    let data: object[] = messages;

    useEffect(() => {
        getMessage()
    }, []);

    return (
        <div>
            <a style={{cursor: "pointer"}} onClick={() => logout()}>Выход</a>
            {data.map((m: any) => {
                    return (
                        <div key={m.id}>
                            <p>{m.user_id}</p>
                            <p>{m.message}</p>
                        </div>
                    )
                }
            )}
        </div>
    )
}
