import React from "react";
import s from "./Dialogs.module.css";


const Dialogs = (props) => {
    return (
        <main className={s.dialogs}>
            <h2 className={s.h2}>Бесіди</h2>
            <div className={s.dialogsBlock}>
                <section>1</section>
                <section>2</section>
            </div>

        </main>
    )
}
export default Dialogs;