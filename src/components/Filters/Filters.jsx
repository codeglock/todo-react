import React, { useState } from 'react';
import './Filters.styles.css'


const Filters = ({}) => {
    const [selected, setSelected] = useState("All")
    const filters = ["All", "Active", "Completed"]
    return(
        <div className="filters">
            {
                filters.map((item, i) => {
                    return <span key={i} onClick={()=> setSelected(item)} className={`filter-item ${selected === item ? 'selected' : ''}`}>{item}</span>
                })
            }
            
        </div>
    );
};

export default Filters;