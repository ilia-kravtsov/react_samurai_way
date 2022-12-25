import React from 'react';
import ProfileStyle from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={ProfileStyle.content}>
            <img src="https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"
                 alt="Groot"/>
            <div className={ProfileStyle.padding}>
                <div>
                    ava + description
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;