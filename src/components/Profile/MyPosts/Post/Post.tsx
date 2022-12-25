import React from 'react';
import PostsStyle from './Post.module.css'

const Post = () => {
    return (
        <div className={PostsStyle.post}>
            <img src="https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"
                 alt="Groot"/>
            <span className={PostsStyle.span}>Post_1</span>
            <div>
                <button className={PostsStyle.radius}>Like</button>
                <button className={PostsStyle.radius} >Dislike</button>
            </div>
        </div>
    )
}

export default Post;