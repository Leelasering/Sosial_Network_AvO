import Post from "../Components/Profile/My_post/Post";
import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import ProfileReducer from "./Profile_reducer";
import DialogsReducer from "./Dialogs_reducer";


export let store = {
    _state:
    {
        ProfilePage: {
            posts: [
                {id : '0', name : 'Anatoly Marginal', text : 'Hfdsf', l_count : "121", date : '23.07.2020'},
                {id : '1', name : 'Andrey Mohortov', text : 'Hello!', l_count : "121", date : '23.07.2020'},
                {id : '2', name : 'Igor Chebotar', text : 'Good bye', l_count : "11", date : '23.07.2020'},
                // {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', l_count: "11", date: '23.07.2020'},
                // {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', l_count: "131", date: '23.07.2020'},
                // {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', l_count: "13", date: '23.07.2020'},
                // {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', l_count: "121", date: '23.07.2020'},
                // {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', l_count: "123", date: '23.07.2020'},
                // {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', l_count: "123", date: '23.07.2020'},
                // {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', l_count: "12", date: '23.07.2020'}

            ],
            NewPostText: ''
        },

        DialogsPage: {
            messages: [
                {id: '0', name: 'Anatoly Marginal', text: 'Hfdsf', time: '10:23', date: '23.07.2020'},
                {id: '1', name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', date: '23.07.2020'},
                {id: '2', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', date: '23.07.2020'},
                {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', date: '23.07.2020'},
                {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', time: '15:20', date: '23.07.2020'},
                {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', date: '23.07.2020'},
                {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', date: '23.07.2020'},
                {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', date: '23.07.2020'},
                {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', date: '23.07.2020'},
                {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', date: '23.07.2020'}
            ],
            dial_names: [
                {id: "1", name: 'Andrey Mohortov', text: 'Hello!', time: '17:00', mess: '4'},
                {id: '2', name: 'Igor Chebotar', text: 'Good bye', time: '17:34', mess: '1'},
                {id: '3', name: 'Maxim Smolentsev', text: 'How r u?', time: '13:00', mess: '2'},
                {id: '4', name: 'Artem Arti-Fix', text: 'What r u doing?', time: '15:20', mess: '3'},
                {id: '5', name: 'Nikolay Agafonov', text: 'sdgsgsdg', time: '16:30', mess: '9'},
                {id: '6', name: 'Egor Greenenko', text: 'Hsdgsgs', time: '13:05', mess: '45'},
                {id: '7', name: 'Vera Barkova', text: 'Hsdgsgsdgsdg', time: '15:03', mess: '3'},
                {id: '8', name: 'Artem Sheglow', text: 'Hdgfdfhhfg', time: '13:08', mess: '6'},
                {id: '9', name: 'Vladimir Alipov', text: 'Hfghhfghfgh', time: '10:23', mess: '8'},
                {id: '10', name: 'Sasha Volk', text: 'Hfgfghfhfgh', time: '11:04', mess: '24'},
            ],
            NewMessText: ''
        },
        SiteBar: {
            friends: [
                {id: '13', name: 'Maxim', text: 'How r u?', time: '13:00', mess: '2'},
                {id: '14', name: 'Artem', text: 'What r u doing?', time: '15:20', mess: '3'},
                {id: '15', name: 'Nikolay', text: 'sdgsgsdg', time: '16:30', mess: '9'},
                {id: '28', name: 'Vlad', text: 'Hdgfdfhhfg', time: '13:08', mess: '6'},
                {id: '29', name: 'Vladimir', text: 'Hfghhfghfgh', time: '10:23', mess: '8'},
                {id: '30', name: 'Sasha', text: 'Hfgfghfhfgh', time: '11:04', mess: '24'},
            ]
        }
    },
    _callSubscriber()
    {
        console.log('State changed')
    },

    subscribe(observer)
    {
        this._callSubscriber = observer; //Наблюатель (Патерн)
    },
    getState()
    {
        return this._state;
    },
    dispatch(action){ //type: 'ADD=POST'

        this._state.ProfilePage = ProfileReducer(this._state.ProfilePage,action);
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage,action);

        this._callSubscriber(this._state);
    }
}




window.store = store;
