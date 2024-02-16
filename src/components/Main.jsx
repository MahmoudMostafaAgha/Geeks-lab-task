import React from 'react';
import MainSearchBar from './MainSearchBar';
import Items from './items';
import '../styles/main.css'
const Main = () => {
    return (
        <>
        <div className="main-page">
                <MainSearchBar/>
                <Items/>
        </div>
                
        </>
    );
};

export default Main;