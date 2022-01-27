import React, { useEffect, useState } from 'react';
import Product from '../Model/Product';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router-dom';
import { isTemplateExpression } from 'typescript';
import Card from '../Card/Card';
import './List.css';

const List = (props) => {

    const {addToCard} = props;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products?limit=5')
            const products = await response.json();
            setProducts(products);
        }
        fetchProducts();
    },[]);

    return (
        <div>
            {
                products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Link to='details' state={{item:product}}>
                                <div>
                                    <img src={product.image} />
                                </div>
                                <p>{product.title}</p>
                                <p>{product.price}</p>
                            </Link>
                            <button onClick={() => addToCard(product)}>Add To Card</button>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default List;