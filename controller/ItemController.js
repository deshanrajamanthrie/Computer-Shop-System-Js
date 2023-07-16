import {Item} from "../model/Item.js";
import {customerArray, itemsArray} from "../db/db.js";

class ItemController {
    constructor() {
        $("#btnItemSave").click(this.itemHandle.bind(this));
        this.itemsarray2 = itemsArray;


    }

    itemHandle() {
        for (let i in itemsArray) {
            if (itemsArray[i].code === $("#txtItemid").val()) {
                alert("Already Exists!")
                return;
            }
        }

        let code = $("#txtItemid").val();
        let name = $("#txtItemName").val();
        let qty = $("#txtItemqty").val();
        let unitPrize = $("#txtItemUnitPrize").val();
        let itemobj = new Item(code, name, qty, unitPrize);

        if (itemobj.code || itemobj.name || itemobj.qty || itemobj.unitPrize) {
            alert("Submit Failed! Please Input Your Detail");
            return;
        } else {
            this.saveItem(itemobj);

        }


    }

    saveItem(itemobj) {
        let itemAdd = itemsArray.push(itemobj);
        console.log(itemAdd);
        this.loadAllItem();
    }

    loadAllItem() {
        $("#item-Table").empty();
        for (let i in this.itemsarray2) {
            let printRow = `<tr><th>${this.itemsarray2[i].code}</th><th>${this.itemsarray2[i].name}</th><th>${this.itemsarray2[i].qty}</th><th>${this.itemsarray2[i].unitPrize}</th></tr>`;
            $("#item-Table").append(printRow);
        }

    }


}

new ItemController();