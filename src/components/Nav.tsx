import React from 'react';
import NavStyle from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={NavStyle.nav}>
            <div className={`${NavStyle.item} ${NavStyle.active}`}>
                <a>Profile</a>
            </div>
            <div className={NavStyle.item}>
                <a>Messages</a>
            </div>
            <div className={NavStyle.item}>
                <a>News</a>
            </div>
            <div className={NavStyle.item}>
                <a>Music</a>
            </div>
            <div className={NavStyle.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;