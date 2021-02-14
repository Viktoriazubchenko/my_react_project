import React from 'react';
import {Route, Switch} from "react-router-dom";
// =======
import classes from './App.module.css'
// ------
import PageNotFound from '../elements/PageNotFound';
// ------
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';
import Dialogs from '../Dialogs/Dialogs';


const App = (props) => {
    return ( 
        <div className={classes.app}>
            <Header/>
            <Navbar/> 
            <div className={classes.appContent}>
                <Switch>
                    <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch}/>}/>
                    <Route component={PageNotFound}/>
                </Switch> 
            </div>
        </div>       
     );
}
 
export default App;