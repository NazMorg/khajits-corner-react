import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrden } from "../../services/firebase";

function OrderConfirm() {
    const [ orderData, setOrderData ] = useState(null);

    const { id } = useParams();

    useEffect(()=>{
        getOrden(id).then((order) =>{
            setOrderData(order);
        });
    },[]);

    return(
        <div>
            <h2>Gracias por su compra!</h2>
            {
            orderData !== null 
            ? (
                <div>
                    <h3>Tu compra es: {orderData.items.map((item) => {
                        return(<p>{item.count} unidades de {item.title}</p>);
                    })}</h3>
                </div>
            )
            :(<p>Espere por favor...</p>)
            }
        </div>
    );
}

export default OrderConfirm;