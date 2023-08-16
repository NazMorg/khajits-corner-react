import React from "react";
import { useContext } from "react";
import { cartDefaultContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

function CartContainer() {
    const { cart, removeItem, clearCart, totalPrice } = useContext(cartDefaultContext);

    if (cart.length === 0) {
        return <h2>No hay productos en el carrito.</h2>
    } else {
        return (
            <div>
                <h2>Mi carrito</h2>
                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>Precio Unitario: ${item.price}</p>
                            <p>Cantidad: {item.count}</p>
                            <button onClick={() => removeItem(item.id)}>Eliminar Producto</button>
                        </div>
                    ))
                }
                <p>Precio Total: ${totalPrice()}</p>
                <Link to="/checkout">
                    <button>Comprar</button>
                </Link>
                <button onClick={clearCart}>Vaciar Carrito</button>
            </div>
        );
    }
}

export default CartContainer;