import React from 'react';
import classes from './Dialogs.module.css';

import Message from './Message/Message';
import DialogItem from './DialogsItem/DialogsItem';

// dlya dialoga nuzhny: imya sobesednika, ego id. Ih my berem iz propsov.
// Put'k soderzhimomu kazhdogo dialoga eto ssylka na samu stranicu dialogov + id sobesednika
// Komponenta DialogItem vozvrawaet NavLink s putem i imya sobesednika



// message dolzhen soderzhat: text soobweniya


// snachala fake-db.

const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Rami'},
        {id: 2, name: 'Alya'},
        {id: 3, name: 'Mama'},
        {id: 4, name: 'Papa'},
    ];

    const messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What are you doing?'}
    ];

    const dialogs = dialogsData.map((dialog) => <div key={dialog.id}><DialogItem id={dialog.id} name={dialog.name} /></div>);

    const messages = messagesData.map((m) => <div key={m.id}><Message message={m.message}/></div>);




    return ( 
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            
            <div className={classes.messages}>
                {messages}
            </div>
        </div>
     );
}
 
export default Dialogs;