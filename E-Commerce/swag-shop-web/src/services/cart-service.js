import NotificationService, { NOTIF_CART_CHANGED } from './notification-service';

let ns = new NotificationService();
let instance = null;
let cart = [];

class CartService {
    constructor() {
        if (!instance) {
            instance = this;

            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                cart = JSON.parse(storedCart);
            }
        }

        return instance;
    }

    getCart() {
        return cart;
    }

    itemOnCart(item) {
        if (!item || !item._id) {
            return false;
        }

        for (let x = 0; x < cart.length; x++) {
            if (cart[x]._id === item._id) {
                return true;
            }
        }

        return false;
    }

    addCartItem(item) {
        if (item && item._id) {
            cart.push(item);
            this.saveCart();
            ns.postNotification(NOTIF_CART_CHANGED, cart);
        } else {
            console.error("Attempted to add an invalid item to the cart:", item);
        }
    }

    removeCartItem(item) {
        for (let x = 0; x < cart.length; x++) {
            if (cart[x]._id === item._id) {
                cart.splice(x, 1);
                this.saveCart();
                ns.postNotification(NOTIF_CART_CHANGED, cart);
                break;
            }
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export default CartService;
