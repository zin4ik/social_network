import React from "react";
import Users from './../../dll/dialogs';
import Messages from './../../dll/Messages';
import s from "./Dialogs.module.css";
import UsersDialog from "./UsersDialog/UsersDialog";
import MassegesDialog from "./MassegesDialog/MassegesDialog";


// let Users=[
//     {id:1, users:'VanilJS'},
//     {id:2, users:'ES6'},
//     {id:3, users:'ES5'},
//     {id:4, users:'jquery'}
// ];

// let Messages=[
//     {id:1, message:'hello'},
//     {id:2, message:'what do you do?'},
//     {id:3, message:'my skil'},
//     {id:4, message:'html, css(scss), bootstrap,jquery,react, webpack'}
// ]

let UsersDialogElements = Users.map(users =><UsersDialog name={users.users} id={users.id} />);
let MassegesDialogElements = Messages.map(message =><MassegesDialog text={message.message}/>)




const Dialogs = () => {
    return (
        <main className={s.dialogs}>
            <h2 className={s.h2}>Бесіди</h2>
            <div className={s.dialogsBlock}>
                <div className={s.users}>
                    {UsersDialogElements}
                </div>
                <div className={s.masseges}>
                    {MassegesDialogElements}

                </div>
            </div>

        </main>
    )
}
export default Dialogs;