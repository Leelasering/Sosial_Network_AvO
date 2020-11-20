import React from 'react';
import c from './Login.module.css';
import fc_s from './../General/FormsControls/FormsControls.module.css';
import {Field, reduxForm} from "redux-form";
import {EmailInput, LoginInput, PassInput} from "../General/FormsControls/FormsControls";
import {maxLength, requiredField} from "../../Utils/Validators/validators";
import {connect} from "react-redux";
import authReducer, {loginThunkCreator, logoutThunkCreator} from "../../Redux/Auth_reduser";
import {Redirect} from "react-router-dom";

const maxLenght10 = maxLength(40)

const LoginForm = (props) => {
    return (
        <form className={props.error ? fc_s.login_form_error : c.login_form} onSubmit={props.handleSubmit}>
            <p className={fc_s.login_err_p}>{props.error}</p>

                <Field  component={EmailInput} validate={[maxLenght10,requiredField]} type={"text"} name="email" placeholder={"Email"}/>

                <Field  component={PassInput} validate={[maxLenght10,requiredField]} type={"password"} name="password" placeholder={"Password"}/>

            <div className={c.rem_me_inp}>
                <Field component={"input"} name={"rememberMe"} id="rem_me_chbox" type={"checkbox"}/>
                <label htmlFor="rem_me_chbox">Remember me</label>
            </div>
            <div className={c.login_btn}>
                <button>Login</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const  onSubmit = (formData) => {
        console.log(formData);
        props.loginThunkCreator(formData.email,formData.password,formData.rememberMe,)
    }

   /* if (props.isAuth)
    {
        return (
        <Redirect to={"/Profile"}/>
        )
    }*/

    return (
        <div>
            <div className={c.content_name}>
                Login
            </div>
                <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );

}
const mapStateToProps = (state) => ({
    isAuth: state.Auth.isAuth
})

export default connect(mapStateToProps,{loginThunkCreator,logoutThunkCreator})(Login);