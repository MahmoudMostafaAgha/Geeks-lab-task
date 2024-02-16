import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/searchBar.css'
const MainSearchBar = () => {
    return (
        <div className="main-search-bar">
            <h1 className='search-bar-title'>ALERTS</h1>
            <div className="search-container">
                <input type="text" placeholder="Search by..." className="search-input" />
                <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            <div className="notification-alert">
                <FontAwesomeIcon icon={faBell} className='bell-icon' />
                <span className="notification-counter">
                    6
                </span>
            </div>
        </div>
    );
};

export default MainSearchBar;
