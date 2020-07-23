import React from 'react';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Dialogs from './Components/Dialogs/Dialogs';
import Profile from './Components/Profile/Profile';

import './App.css';
import c from "./Components/Dialogs/Dialogs.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="Sub_Con">
                    <div className="big_header"></div>
                    <div className="Container">
                        <Header/>
                        <NavBar/>
                        <div className="content">
                            <Route path="/Dialogs" component={Dialogs}/>
                            <Route path="/Profile" component={Profile}/>
                            <Route path="/News" component={News}/>
                            <Route path="/Music" component={Music}/>
                            <Route path="/Settings" component={Settings}/>


                        </div>
                        {/*<Profile /> <Dialogs/>*/}
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
