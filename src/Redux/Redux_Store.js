import {combineReducers, createStore} from "redux";
import DialogsReducer from "./Dialogs_reducer";
import ProfileReducer from "./Profile_reducer";
import SiteBarReduser from "./SiteBar_reducer";
import UsersReducer from "./Users_reducer";


let reducers = combineReducers({
    DialogsPage: DialogsReducer,
    ProfilePage: ProfileReducer,
    UsersPage: UsersReducer,
    SiteBar: SiteBarReduser

});

export let store = createStore(reducers);

window.store = store;
