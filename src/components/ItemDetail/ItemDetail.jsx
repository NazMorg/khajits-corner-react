import { useContext } from "react";
import { cartDefaultContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ItemDetail(props) {
    const { products } = props;
    const { addItem, getCartItem } = useContext(cartDefaultContext)

    const isInCart = getCartItem(products.id);
    const maxStock = isInCart ? products.stock - isInCart.count : products.stock;

    function toastNotif() {
        toast.success('Operación realizada con exito!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }

    function handleAddItem(quantity) {
        addItem(products, quantity);
        toastNotif();
    }


    return (
        <div className="cardInfo">
            <div>
                <img width={300} src={products.img} alt="imagen"></img>
            </div>
            <div className="cardInfoDetails">
                <div>
                    <h3 className="cardInfoTitle">{products.title}</h3>
                    <p className="cardInfoDesc">{products.description}</p>
                </div>
                <div>
                    <h5 className="cardInfoPrice">Price: $ {products.price}</h5>
                </div>
                {
                    maxStock > 0 ? <ItemCount stock={maxStock} onConfirm={handleAddItem} /> : <h5>No hay Stock</h5>
                }
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover={false}
                theme="dark"
            />
        </div>
    )
}

export default ItemDetail;