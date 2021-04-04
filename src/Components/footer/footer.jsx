import React from 'react';
import PropTypes from 'prop-types';

import './footer.css';


const FILTERS_BTN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed'
    }
];

const Footer = ({ amount, activeFilter, onClick }) => (
    <div className="footer">
        <span className="amount">{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTERS_BTN.map(({ text, id }) => (
                <button
                    onClick={(event) => onClick(event, id)}
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : 'filter-btn'}
                >{text}</button>
            ))}
        </div>
    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
}

Footer.defaultProps = {
    amount: 0,
    activeFilter: 'all',
}

export default Footer