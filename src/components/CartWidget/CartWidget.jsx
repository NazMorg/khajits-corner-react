import './cartwidget.css';
import { useContext } from 'react';
import { cartDefaultContext } from '../../context/CartContext';


function CartWidget() {
    const context = useContext(cartDefaultContext);

    return(
        <div className="cartWidget">
            <i className='icono'>
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-cart-1438627-1214043.png?f=avif&w=256" alt="Cart Icon" />
                <p className='quantityBubble'>{context.totalItems()}</p>
            </i>
        </div>
    );
}

export default CartWidget;