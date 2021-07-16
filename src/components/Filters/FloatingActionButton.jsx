import React from 'react';
import DeleteIcon from '../Icons/DeleteIcon';
import './Filters.styles.css'

const FloatingActionButton = () => {
    return(
        <div className="floating-action" aria-label="Delete all items">
            <span className="clear-btn">
                <DeleteIcon width="30" height="30" color="#2f16ec"/>
            </span>
        </div>
    );
};

export default FloatingActionButton;