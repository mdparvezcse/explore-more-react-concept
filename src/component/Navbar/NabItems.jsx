import React from 'react';

const NabItems = ({item}) => {
    return (
        <div>
            <ul>
                <li className='mr-5'><a href="">{item.title}</a></li>
            </ul>
        </div>
    );
};

export default NabItems;