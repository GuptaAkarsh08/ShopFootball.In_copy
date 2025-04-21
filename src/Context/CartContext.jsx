import { createContext, useState } from "react";
import {Data, getProductData} from "../Data/Data";
import { useEffect } from "react";


export const CartContext = createContext({
    products:[],
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalCost: () => {},
});


export function CartProvider({children}) {
    
    const [products,setProducts] = useState(Data);
    const [cartProducts, setCartProducts] = useState([]);
    
    // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]
   
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    
    function addOneToCart(id,price,src,desc) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1,
                        price: price,
                        src: src,
                        desc: desc
                    }
                ]
            )
        } else { // product is in cart
            // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity + 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
          
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if(quantity == 1) {
           
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id                                // if condition
                    ? { ...product, quantity: product.quantity - 1 } // if statement is true
                    : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
        // [] if an object meets a condition, add the object to array
        // [product1, product2, product3]
        // [product1, product3]
      
       setCartProducts(cartProducts => cartProducts.filter((p) => {
        return p.id !== id
       }))
      
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }
      
    //   useEffect(() => {
    //     localStorage.setItem("ShopCart",JSON.stringify(cartProducts));
    //   },[cartProducts]);

    //   useEffect(() => {
    //     const dataInCart = JSON.parse(localStorage.getItem("ShopCart"));
    //      setCartProducts(dataInCart);
    //   },[]);

    //   console.log(cartProducts);

    const contextValue = {
        products:products,
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost,
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;


