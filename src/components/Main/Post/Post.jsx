import React from 'react';
import style from './Post.module.css';

let posts={
likes:5,
str:"this my first post",
}
const Post = (props)=>{
    console.log(props.posts, props.likes);
    return (
        <div className={style.post}>
            <div className={style.ava}>
                <img src="https://avatarko.ru/img/avatar/11/Yoda_10653.jpg" alt="avatar" className={style.img} />
                <input type="date" className={style.date} />
            </div>
            <p className={style.text}>{props.posts}</p>
            <button className={style.like}>Подобається {" "+props.likes}</button>
        </div>
    )
}

export default Post;