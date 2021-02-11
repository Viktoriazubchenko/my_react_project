import React from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../profile/Profile';

const App = () => {
    return ( 
        <div>
           <Header/>
           <Navbar/> 
           <Profile/>
        </div>
     );
}
 
export default App;