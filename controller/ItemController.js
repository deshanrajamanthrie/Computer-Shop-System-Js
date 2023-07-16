import {Item} from "../model/Item.js";
import {itemsArray} from "../db/db.js";

class ItemController {
    constructor() {
        $("#btnItemSave").click(this.itemHandle.bind(this));


    }

    itemHandle() {
        this.saveCustomer();
    }

    saveCustomer() {
        let code = $("#txtItemid").val();
        let name = $("#txtItemName").val();
        let qty = $("#txtItemqty").val();
        let unitPrize = $("#txtItemUnitPrize").val();
        let item = new Item(code, name, qty, unitPrize);

        this.loadAllItem(item);

    }

    loadAllItem() {

    }


}

new ItemController();