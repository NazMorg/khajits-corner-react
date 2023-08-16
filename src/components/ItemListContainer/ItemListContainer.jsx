import './itemContainer.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData, getCategory } from '../../services/firebase';
import ItemList from '../ItemList/ItemList';


function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    async function productsRequest() {
        let res = categoryId ? await getCategory(categoryId) : await getData();
        setProducts(res);
    }
    useEffect(() => {
        productsRequest();
    }, [categoryId]);

    return (
        <ItemList products={products} />
    );
}

export default ItemListContainer;