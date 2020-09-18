import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import NavBarContainer from "./Components/NavBar/NavBarContainer";



const App = (props) => {


    return (

            <div className="App">
                <div className="Sub_Con">
                    <div className="big_header"></div>
                    <div className="Container">
                        <HeaderContainer/>
                        <NavBarContainer/>
                        <div className="content">
                            <Route path="/Dialogs" render={() => <Dialogs/>}/>
                            <Route path="/Profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/News" render={() => <News/>}/>
                            <Route path="/Music" render={() => <Music/>}/>
                            <Route path="/Settings" render={() => <Settings/>}/>
                            <Route path="/Users" render={() => <UsersContainer/>}/>
                        </div>
                        {/*<Profile /> <Dialogs/>*/}
                    </div>
                </div>
            </div>

    );
}


export default App;
