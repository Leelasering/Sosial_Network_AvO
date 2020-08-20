import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import UsersContainer from "./Components/Users/UsersContainer";



const App = (props) => {


    return (

            <div className="App">
                <div className="Sub_Con">
                    <div className="big_header"></div>
                    <div className="Container">
                        <Header/>
                        <NavBar/>
                        <div className="content">
                            <Route path="/Dialogs" render={() => <Dialogs/>}/>
                            <Route path="/Profile" render={() => <Profile/>}/>
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
