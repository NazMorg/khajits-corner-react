import { getProduct } from "../../services/firebase";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [products, setProducts] = useState([]);
    const { id } = useParams();

    async function productsRequest() {
        const res = await getProduct(id);
        setProducts(res);
    }
    useEffect(() => {
        productsRequest();
    }, []);

    return (
        <ItemDetail products={products} />
    )
}

export default ItemDetailContainer;