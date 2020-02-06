import React from 'react';
import s from './MassegesDialog.module.css';

const MassegesDialog =(props)=>{
    return (
        
            <article className={s.MassegesDialog}>
                <section className={s.masseg}>
                    <p className={s.textMasseg}>{props.text}</p>
                </section>
                </article>
        
    )
}
export default MassegesDialog;