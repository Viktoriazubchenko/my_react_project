import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// =======
import classes from './App.module.css'
// ------
import PageNotFound from '../elements/PageNotFound';
// ------
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import Dialogs from '../Dialogs/Dialogs';


const App = () => {
    return ( 
        <BrowserRouter>
        <div className={classes.app}>
            <Header/>
            <Navbar/> 
            <div className={classes.appContent}>
                <Switch>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route component={PageNotFound}/>
                </Switch> 
            </div>
        </div>
        </BrowserRouter>
        
     );
}
 
export default App;