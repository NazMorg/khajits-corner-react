import { useContext, useState } from "react";
import { crearOrden } from "../../services/firebase";
import { cartDefaultContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const [ comprador, setComprador ] = useState({
        nombre: "",
        apellido: "",
        edad: "",
    });

    const navegar = useNavigate();
    const { cart, totalPrice, clearCart } = useContext(cartDefaultContext);
    const total = totalPrice(cart)

    async function handleCheckout(evt) {
        evt.preventDefault();
        const orderData = {
            items: cart,
            comprador: comprador,
            total: total,
            fecha: new Date(),
        };
        try {
            const orderId = await crearOrden(orderData);
            navegar(`/order-confirm/${orderId}`);
            clearCart();
        } catch (error) {
            alert(`No se pudo realizar la compra ${error.message}`);
        };
    }

    function inputChange(evt) {
        const value = evt.target.value;
        const input = evt.target.name;

        const cambio = {...comprador};
        cambio[input] = value;
        setComprador(cambio);
    }

    function formReset(e) {
        e.preventDefault();
        setComprador({
            nombre: "",
            apellido: "",
            edad: "",
        });
    }

    return(
        <form>
            <h2>Complete los datos de la compra</h2>

            <div>
                <label htmlFor="nombre">Nombre</label>
                <input value={comprador.nombre} name="nombre" type="text" onChange={inputChange}></input>
            </div>
            <div>
                <label htmlFor="apellido">Apellido</label>
                <input value={comprador.apellido} name="apellido" type="text" onChange={inputChange}></input>
            </div>
            <div>
                <label htmlFor="edad">Edad</label>
                <input value={comprador.edad} name="edad" type="number" onChange={inputChange}></input>
            </div>
            <button disabled={!(comprador.nombre !== "" && comprador.apellido !== "" && comprador.edad !== "")} onClick={handleCheckout}>Confirmar Compra</button>
            <button onClick={formReset}>Cancelar Compra</button>

        </form>
    )
}

export default Checkout;