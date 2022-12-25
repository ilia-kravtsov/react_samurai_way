import React from 'react';
import MyPostsStyle from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={MyPostsStyle.padding}>
            My Posts
            <div>
                <textarea className={MyPostsStyle.textarea}></textarea>
                <div><button>Push me </button></div>
                <div><button>and then just touch me</button></div>
            </div>
            <div className={MyPostsStyle.posts}>
                <Post message='Hi, how are you doing?' likeCount={10} disLikeCount={1}/>
                <Post message='I am Groot' likeCount={17} disLikeCount={1}/>
            </div>
        </div>
)
}

export default MyPosts;