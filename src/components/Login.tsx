import React from "react";
import {Field, Form} from "react-final-form";
import TextInput from "./TextInput";
import {useAuth} from "../hook.js/auth.hook";

interface Values {
    login?: string;
    password?: string;
    remember: boolean;
}

export const  Login = () => {
    const {signIn} = useAuth();

    const onSubmit = async (values: Values) => {
        signIn(values)
    };

    return (
        <div>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Login</label>
                            <Field<string>
                                name="login"
                                component={TextInput}
                                placeholder="login"
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <Field<string>
                                name="password"
                                component={TextInput}
                                placeholder="password"
                            />
                        </div>
                        <div>
                            <label>remember</label>
                            <Field name="remember" component="input" type="checkbox" />
                        </div>

                        <div className="buttons">
                            <button type="submit" >
                                Submit
                            </button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}
