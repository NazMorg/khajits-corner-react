import { useState, createContext} from 'react';

const cartDefaultContext = createContext({ cart: [] });

function ContextProvider(props) {
    const [cart, setCart] = useState([]);
    
    function inCart(id) {
        return cart.some((item) => item.id === id);
    }

    function addItem(product, count) {
        const userCart = [...cart];

        if(inCart(product.id)) {
            const indexUpdate = cart.findIndex((item) => item.id === product.id);
            userCart[indexUpdate].count += count;
            setCart(userCart);
        } else {
            const newItemAdded = {...product, count};
            userCart.push(newItemAdded);
            setCart(userCart);
        }
    }

    function getCartItem(id) {
        return cart.find((item) => item.id === id);
    }

    function removeItem(id) {
        setCart(cart.filter((item) => item.id !== id));
    }

    function clearCart() {
        setCart([]);
    }

    function totalItems() {
        let total = 0;
        cart.forEach((item) => {
            total += item.count;
        });
        return total;
    }

    function totalPrice() {
        let finalPrice = 0;
        cart.forEach((item) => {
            finalPrice += item.count * item.price;
        });
        return finalPrice;
    }

    return(
        <cartDefaultContext.Provider value={{addItem, cart, clearCart, getCartItem, removeItem, totalItems, totalPrice}}>
            {props.children}
        </cartDefaultContext.Provider>
    );
}

export { cartDefaultContext, ContextProvider };