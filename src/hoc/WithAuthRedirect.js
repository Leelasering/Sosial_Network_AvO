import React from 'react';
import {Redirect} from "react-router-dom";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import {connect} from "react-redux";



export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/Login"}/>
            } else {
                return (<Component {...this.props}/>)
            }

        }
    }
    let mapStateToProps = (state) => ({
        isAuth: state.Auth.isAuth
    })
    const ConnectedRedirectComponent = connect(mapStateToProps,{})(RedirectComponent);
 return ConnectedRedirectComponent
}





