import {applyMiddleware, combineReducers, createStore} from "redux";
import DialogsReducer from "./Dialogs_reducer";
import ProfileReducer from "./Profile_reducer";
import SiteBarReduser from "./SiteBar_reducer";
import UsersReducer from "./Users_reducer";
import authReducer from "./Auth_reduser";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";
import appReducer from "./App_reduser";


let reducers = combineReducers({
    DialogsPage: DialogsReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer,
    SiteBar: SiteBarReduser,
    Auth: authReducer,
    App: appReducer,
    form: formReducer
});

export let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;
