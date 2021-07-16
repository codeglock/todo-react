import React from 'react';

const TodoItem = ({item}) => {
    
    return(
        <div className="todo-item">
            <h1>{item}</h1>
        </div>
    );
};

export default TodoItem;