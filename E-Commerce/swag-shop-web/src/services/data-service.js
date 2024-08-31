import NotificationService, { NOTIF_WISHLIST_CHANGED } from './notification-service';

let ns = new NotificationService();
let instance = null;
let wishList = [];

class DataService {
    constructor() {
        if (!instance) {
            instance = this;

            const storedWishList = localStorage.getItem('wishList');
            if (storedWishList) {
                wishList = JSON.parse(storedWishList);
            }
        }

        return instance;
    }

    getWishList() {
        return wishList;
    }

    itemOnWishList(item) {
        if (!item || !item._id) {
            return false;
        }

        for (let x = 0; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                return true;
            }
        }

        return false;
    }

    addWishListItem(item) {
        if (item && item._id) {
            wishList.push(item);
            this.saveWishList();
            ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
        } else {
            console.error("Attempted to add an invalid item to the wishlist:", item);
        }
    }

    removeWishListItem(item) {
        for (let x = 0; x < wishList.length; x++) {
            if (wishList[x]._id === item._id) {
                wishList.splice(x, 1);
                this.saveWishList();
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }
    }

    saveWishList() {
        localStorage.setItem('wishList', JSON.stringify(wishList));
    }
}

export default DataService;
