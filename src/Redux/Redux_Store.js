import {combineReducers, createStore} from "redux";
import DialogsReducer from "./Dialogs_reducer";
import ProfileReducer from "./Profile_reducer";
import SiteBarReduser from "./SiteBar_reducer";
import UsersReducer from "./Users_reducer";
import authReducer from "./Auth_reduser";


let reducers = combineReducers({
    DialogsPage: DialogsReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer,
    SiteBar: SiteBarReduser,
    Auth: authReducer
});

export let store = createStore(reducers);

window.store = store;
