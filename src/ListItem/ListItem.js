import React from 'react';
import Product from '../Model/Product';
import { useLocation } from 'react-router-dom'
import Item from '../Model/Item';

const ListItem = (props) => {

    // TODO problem with type script
    const location = useLocation();

    const {item} = location.state;

    const {addToCard} = props;
     
    return (
        <div>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>
                <img src={item.image} />
            </p>
            <button onClick={() => addToCard(item)}>Add to Card</button>
        </div>
    )

}

export default ListItem;