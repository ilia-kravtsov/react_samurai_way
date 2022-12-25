import React from 'react';
import ProfileStyle from './Profile.module.css'

const Profile = () => {
    return (
        <div className={ProfileStyle.content}>
            <img src="https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13"
                 alt="Groot"/>
            <div className={ProfileStyle.padding}>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                    <div className={ProfileStyle.posts}>
                        <div className={ProfileStyle.post}>
                            Post_1
                        </div>
                        <div className={ProfileStyle.post}>
                            Post_2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;