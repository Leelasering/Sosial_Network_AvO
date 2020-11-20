import React from 'react';
import c from './ProfileStaus.module.css';


class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status
    }

    render() {
        return (<div>
                {!this.state.editMode &&
                    this.about_me_editMode_f(this.props)}
                {this.state.editMode &&
                    this.about_me_editMode_t(this.props)}
                 </div>
        );
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        if(this.state.status != this.props.status){
            this.props.updateStatusThunkCreator(this.state.status);
        }
        if(this.state.status != this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       if(prevProps.status != this.props.status){
           this.setState({
               status: this.props.status
           })
       }

    }

    about_me_editMode_t = (props) =>{
        return(
            <div className={c.change_status_active_div} onBlur={this.deactivateEditMode}>
                <input autoFocus={true}
                       type="text"
                       className={c.set_status_text}
                       maxLength="80"
                       placeholder="Write your status here"
                       value={this.state.status}
                onChange={this.onStatusChange}/>
               {/* <button className={c.set_status_btn} >Submit</button>*/}
            </div>
        );
    }



    about_me_editMode_f = (props) => {

        if (props.status && (props.profile.userId != props.id))
        {
            return(
                <p className={c.about_me}>{props.status}</p>
            );
        }

        else if(((props.profile.userId == props.id) || (!props.profile.userId && !props.id)))
        {
            return(<div>
                    {props.status ?
                        <div className={c.about_me_autmMe_NOTempty_btn} onClick={this.activateEditMode}>{props.status}</div> :
                        <div className={c.about_me_autmMe_empty_btn} onClick={this.activateEditMode}>change status</div>}
                </div>
            );
        }
        else
        {
            return(
                ""
            );
        }

    }
}


export default ProfileStatus;