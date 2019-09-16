import React from "react";
import s from "./Dialogs.module.css";
import UsersDialog from "./UsersDialog/UsersDialog";
import MassegesDialog from "./MassegesDialog/MassegesDialog";


const Dialogs = () => {
    return (
        <main className={s.dialogs}>
            <h2 className={s.h2}>Бесіди</h2>
            <div className={s.dialogsBlock}>
                <UsersDialog />
                <MassegesDialog />
            </div>

        </main>
    )
}
export default Dialogs;