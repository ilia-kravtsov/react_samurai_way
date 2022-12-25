import React from 'react';
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={MyPostsStyle.padding}>
            My Posts
            <div>
                <textarea className={MyPostsStyle.textarea}></textarea>
                <div><button>Push me and then just touch me</button></div>
                <div><button>till i can get my satisfaction</button></div>
            </div>
            <div className={MyPostsStyle.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
)
}

export default MyPosts;