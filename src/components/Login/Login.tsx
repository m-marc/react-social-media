import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useDispatch} from "react-redux";
import {login} from "../../redux/auth-reducer";

interface Values {
    email: string;
    password: string;
    rememberMe: boolean;
}

const Login = () => {
    const dispatch = useDispatch()
    return <div>
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
                    <Field type="checkbox" name="rememberMe" />
                </div>
                <button type="submit">Login</button>
            </Form>
        </Formik>

    </div>
}
export default Login