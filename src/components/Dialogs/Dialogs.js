import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {addMessageAC, updateNewMessageAC} from './../../redux/state';

// dlya dialoga nuzhny: imya sobesednika, ego id. Ih my berem iz propsov.
// Put'k soderzhimomu kazhdogo dialoga eto ssylka na samu stranicu dialogov + id sobesednika
// Komponenta DialogItem vozvrawaet NavLink s putem i imya sobesednika



// message dolzhen soderzhat: text soobweniya


// snachala fake-db.

const Dialogs = (props) => {



    const dialogs = props.dialogsPage.dialogs.map((dialog) => <div key={dialog.id}><DialogItem id={dialog.id} name={dialog.name} /></div>);

    const messages = props.dialogsPage.messages.map((m) => <div key={m.id}><Message message={m.message}/></div>);

    let newMessageElement = React.createRef();

    let sendMessage = (event) => {
        event.preventDefault();
        let text = newMessageElement.current.value;
        let action = addMessageAC(text);
        props.dispatch(action);
    }

    let handleChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageAC(text);
        props.dispatch(action);
    }


    return ( 
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogs}
            </div>
            
            <div className={classes.messages}>
                {messages}
                <form>
                    <textarea ref={newMessageElement} value={props.newMessage} onChange={handleChange}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </form>
            </div>
        </div>
     );
}
 
export default Dialogs;