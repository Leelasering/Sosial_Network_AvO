import React from 'react';
import c from './Description.module.css';


const Desc = (props) => {

    if(!props.profile)
    {
        return (
            <div className={c.desc_div}>

                <div className={c.name}></div>

            </div>
        );
    }
    else
    {
        return (
            <div className={c.desc_div}>

                <div className={c.name}>{props.profile ? props.profile.fullName : ""}
                    { props.profile.aboutMe ? <p className={c.about_me}> { props.profile.aboutMe}</p> : ""}
                </div>


                {props.profile.contacts.facebook ?
                    <div className={c.desc_p_div}><p className={c.p_1}>facebook:</p> <p
                        className={c.p_2}>{props.profile.contacts.facebook}</p></div>
                    :
                    ""}
                {props.profile.contacts.website ?
                    <div className={c.desc_p_div}><p className={c.p_1}>website:</p> <p
                        className={c.p_2}>{props.profile.contacts.website}</p></div>
                    :
                    ""}
                {props.profile.contacts.vk ?
                    <div className={c.desc_p_div}><p className={c.p_1}>vk:</p> <p
                        className={c.p_2}>{props.profile.contacts.vk}</p></div>
                    :
                    ""}
                {props.profile.contacts.twitter ?
                    <div className={c.desc_p_div}><p className={c.p_1}>twitter:</p> <p
                        className={c.p_2}>{props.profile.contacts.twitter}</p></div>
                    :
                    ""}
                {props.profile.contacts.instagram ?
                    <div className={c.desc_p_div}><p className={c.p_1}>instagram:</p> <p
                        className={c.p_2}>{props.profile.contacts.instagram}</p></div>
                    :
                    ""}
                {props.profile.contacts.youtube ?
                    <div className={c.desc_p_div}><p className={c.p_1}>youtube:</p> <p
                        className={c.p_2}>{props.profile.contacts.youtube}</p></div>
                    :
                    ""}
                {props.profile.contacts.github ?
                    <div className={c.desc_p_div}><p className={c.p_1}>github:</p> <p
                        className={c.p_2}>{props.profile.contacts.github}</p></div>
                    :
                    ""}
                {props.profile.contacts.mainLink ?
                    <div className={c.desc_p_div}><p className={c.p_1}>mainLink:</p> <p
                        className={c.p_2}>{props.profile.contacts.mainLink}</p></div>
                    :
                    ""}


            </div>
        );
    }
}

export default Desc;