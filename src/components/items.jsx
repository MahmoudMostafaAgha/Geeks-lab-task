import { useState } from 'react';
import React from 'react';

import '../styles/items.css';

const Items = () => {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItemExpansion = (index) => {
    setExpandedItems((prevExpandedItems) => {
      const isExpanded = prevExpandedItems.includes(index);
      if (isExpanded) {
        return prevExpandedItems.filter((itemIndex) => itemIndex !== index);
      } else {
        return [...prevExpandedItems, index];
      }
    });
  };

  const items = [
    { name: 'AMZN', revenue: 200, risk: 'Low', class: 'low' },
    { name: 'GOOGL', revenue: 300, risk: 'High', class: 'high' }
  ];

  const repeatedItems = Array.from({ length: 10 });

  return (
    <>
      <div className="all-items">
        {repeatedItems.map((_, index) => (
          <div key={index} className="item-wrapper">
            <div
              className={`item-card ${expandedItems.includes(index) ? 'expanded' : ''}`}
              onClick={() => toggleItemExpansion(index)}
            >
              <div className="data-container">
                <img src="/images/dollar-tag.png" alt="dollar" />
                <div>{items[index % items.length].name}</div>
              </div>
              <div className="spiliter"></div>

              <div className="data-container">
                <img src="/images/revenue.png" alt="dollar" />
                <div>{items[index % items.length].revenue}</div>
              </div>
              <div className="spiliter"></div>

              <div className="data-container">
                <img src="/images/indicator.png" alt="dollar" />
                <div className={items[index % items.length].class}>
                  {items[index % items.length].risk === 'Low' ? '-0.25 %' : '0.5 %'}
                </div>
              </div>
              <div className="spiliter"></div>

              <div className="data-container">
                <img
                  src={`/images/${items[index % items.length].risk.toLowerCase()}-risk.png`}
                  alt="dollar"
                />
                <div>{items[index % items.length].risk} Risk</div>
              </div>
            </div>

            {expandedItems.includes(index) && (
              <div className="expanded-data">
                <p>Additional demo data for expanded item {index} just for showing the logic</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Items;
