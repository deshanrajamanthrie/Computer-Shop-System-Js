import {itemsArray,customerArray,orderArray,orderDetailArray} from "../db/db.js";
import {Order} from "../model/Order.js";
import {OrderDetail} from "../model/OrderDetail.js";


export class OrdersController {
    constructor() {
        this.customerArray2 = customerArray;
        this.itemArray2 = itemsArray;
        this.order2 = orderArray;
        this.orderDetail2 = orderDetailArray;
        this.initialize();
    }

    initialize() {



    }

}