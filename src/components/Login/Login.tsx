import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";

interface Values {
    username: string;
    password: string;
}

const Login = () => {
    return <div>
        <h1>Login page</h1>
        <Formik
            initialValues={{
                username: '',
                password: '',
            }}
            onSubmit={(
                values: Values,
                { setSubmitting }: FormikHelpers<Values>
            ) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 500)
            }}
        >
            <Form>
                <div>
                    <label htmlFor="username">Username</label>
                    <Field id="username" type="text" name="username" placeholder="John"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field id="password" type="password" name="password"/>
                </div>
                <button type="submit">Login</button>
            </Form>
        </Formik>

    </div>
}

// const LoginFormik = withFormik({
//     mapPropsToValues: (props) => {
//         return {
//             // @ts-ignore
//             email: props.email || '',
//             // @ts-ignore
//             password: props.password || ''
//         }
//     },
//     handleSubmit: (values) => {
//         console.log(values)
//     }
// })(Login)

export default Login