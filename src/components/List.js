import React from 'react';

const List = ({items, handleClick}) => {
    
    return (
        <>
        {items.map(item => <button className="info" key={item.title || item.name} onClick={handleClick}>{item.title || item.name}</button>) }
        </>
    )
}

export default List;
