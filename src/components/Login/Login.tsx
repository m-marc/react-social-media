import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {selectAuth} from "../../redux/Selectors";
import { Redirect } from "react-router-dom";

interface Values {
    email: string;
    password: string;
    rememberMe: boolean;
}

const Login = () => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(selectAuth)

    return isAuth ?
        <Redirect to="/profile" /> :
    (<div>
        <h1>Login page</h1>
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                dispatch(login(values.email, values.password, values.rememberMe))
                setSubmitting(false);
            }}
        >
            <Form>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="John@mail.com"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password"/>
                </div>
                <div>
                    <label htmlFor="rememberMe">Remember Me</label>
                    <Field type="checkbox" name="rememberMe" />
                </div>
                <button type="submit">Login</button>
            </Form>
        </Formik>

    </div>)
}
export default Login