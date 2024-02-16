import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faCog, faFolderOpen, faChartLine , faGears , faGraduationCap} from '@fortawesome/free-solid-svg-icons';
import  '../styles/sidebar.css';

const SideBar = () => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <>
       
        <div className={`sidebar ${sidebarVisible ? 'active' : ''}`}>
            <img src='/images/sidebar-logo.png' alt="Sidebar Logo" className='sidebar-logo' />
            <ul className='sidebar-list'>
                <li>
                    <a className='sidebar-link'>
                        <FontAwesomeIcon icon={faBell} className='sidebar-icon' />
                        <div className='sidebar-text'>Alerts</div>
                    </a>
                </li>
                <li>
                    <a className='sidebar-link'>
                        <FontAwesomeIcon icon={faGraduationCap} className='sidebar-icon' />
                        <div className='sidebar-text'>Training</div>
                    </a>
                </li>
                <li>
                    <a className='sidebar-muted-link'>
                        <FontAwesomeIcon icon={faGears} className='sidebar-icon' />
                        <div className='sidebar-muted-text'>Automation</div>
                    </a>
                </li>
                <li>
                    <a className='sidebar-muted-link'>
                        <FontAwesomeIcon icon={faFolderOpen} className='sidebar-icon' />
                        <div className='sidebar-muted-text'>Portfolio</div>
                    </a>
                </li>
                <li>
                    <a className='sidebar-muted-link'>
                        <FontAwesomeIcon icon={faChartLine} className='sidebar-icon' />
                        <div className='sidebar-muted-text'>Trading</div>
                    </a>
                </li>
            </ul>
            <div className="sidebar-bottom">
                <div className="user-data">
                    <img src="/images/user.png" alt="Portfolio" className='user-img'/>
                    <div className="user-text">
                        <h3 className='user-name'>Moni Roy</h3>
                        <div className="user-level">Beginner</div>
                    </div>
                </div>
                <div className="brand-data">Street Suite. 2.0</div>
            </div>
        </div>
            <div className="burger-icon" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </>
    );
};

export default SideBar;
