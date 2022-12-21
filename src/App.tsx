import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app_wrapper'>
            <header className='header'>
                <img src="https://pluspng.com/img-png/avengers-logo-png-transparent-aou-logo-png-844.png" alt="Groot"/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='#'>Profile</a>
                </div>
                <div>
                    <a href='#'>Messages</a>
                </div>
                <div>
                    <a href='#'>News</a>
                </div>
                <div>
                    <a href='#'>Music</a>
                </div>
                <div>
                    <a href='#'>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <img src="https://avatars.mds.yandex.net/i?id=a69847b56ccbe331769d0552889e756a-5234578-images-thumbs&n=13" alt="Groot"/>
                <div>
                    ava + description
                </div>
                <div>
                    My Posts
                    <div>
                        New Post
                    </div>
                    <div>
                        <div>
                            Post_1
                        </div>
                        <div>
                            Post_2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
