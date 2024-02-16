import React from 'react';
import { faClose, faSearch, faSortDown, faBolt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/filter.css';

const Filter = () => {

    const filters = [
        'Real Estate',
        'Healthcare',
        'Materials',
        'Consumer Discretionary',
        'Real Estate',
        'IT',
        'Communication',
        'Consumer Staples',
        'Industrials',
        'Utilities',
        'Financials'
    ];
    return (
        <div className="filter-container">
            <h3 className="filter-title">Filters</h3>
            <div className="filter-input-container">
                <div className="filter-input-label">
                    <div className="filter-label">Filters Applied</div>
                    <div className="clear-all">Clear All</div>
                </div>
                <div className="filter-input">
                    <div className="select-box">
                        <div className="selected-option">
                            Real estate  	&nbsp;
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="filter-lists-container">
                <div className="stock">
                    <div className="stock-title">stock</div>
                    <div className="search-container ticket-search-container">
                        <input type="text" placeholder="$ tICKER" className="search-input ticket-search" />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                </div>
                <div className="industry">
                    <div className="industry-title">
                        <FontAwesomeIcon icon={faSortDown} /> &nbsp;
                        Industry</div>

                    <div className="options-container row">
                        <div className="col-6">
                            <ul className='items-col'>
                                {filters.slice(0, 6).map((filter, index) => (
                                    <li key={index} className='category-item'>
                                        <FontAwesomeIcon icon={faBolt} /> &nbsp;
                                        <div className="category">
                                            {filter}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className='items-col'>
                                {filters.slice(6).map((filter, index) => (
                                    <li key={index + 6} className='category-item'>
                                        <FontAwesomeIcon icon={faBolt} /> &nbsp;
                                        <div className="category">
                                            {filter}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="industry-title">
                            <FontAwesomeIcon icon={faSortDown} /> &nbsp;Market Cap
                        </div>
                        <div>
                            <label className='radio-btn-label'>
                                <input type="radio" value="Micro" name="market_cap" className='radio-btn' />
                                Micro
                            </label>
                        </div>
                        <div>
                            <label className='radio-btn-label'>
                                <input type="radio" value="Small" name="market_cap" />
                                Small
                            </label>
                        </div>
                        <div>
                            <label className='radio-btn-label'>
                                <input type="radio" value="Large" name="market_cap" />
                                Large
                            </label>
                        </div>
                    </div>


                    <div className="col-6">
                        <div className="industry-title">
                            <FontAwesomeIcon icon={faSortDown} /> &nbsp;Risk Level
                        </div>
                        <div>
                            <label className='radio-btn-label'>
                                <input type="radio" value="Micro" name="market_cap" className='radio-btn' />
                                Low Risk
                            </label>
                        </div>
                        <div>
                            <label className='radio-btn-label'>
                                <input type="radio" value="Small" name="market_cap" />
                                Mid Risk
                            </label>
                        </div>
                        <div>
                            <label className='radio-btn-label'>
                                <input type="radio" value="Large" name="market_cap" />
                                High Risk
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 filter-col">
                        <div className="industry-title">
                            strategy
                        </div>
                        <div className="gradient-text">Big Option Buys</div>
                        <div className="blue-bg-text">Merger Arbitrage</div>
                        <div className="gradient-text">Short Reports</div>
                    </div>
                    <div className="col-6 filter-col">
                        <div className="industry-title">
                            asset
                        </div>
                        <div className="gradient-text">Stocks</div>
                        <div className="blue-bg-text">Options</div>
                        <div className="gradient-text">Futures</div>
                    </div>
                </div>
            </div>

            <div className="apply-btn">
                Apply
            </div>

        </div>
    );
};

export default Filter;
