import {Item} from "../model/Item.js";
import {itemsArray} from "../db/db.js";

class ItemController {
    constructor() {
        $("#btnItemSave").click(this.itemHandle.bind(this));
        $("#btnItemSearch").click(this.itemSearch.bind(this));
        $("#btnItemUpdate").click(this.itemUpdateHandle.bind(this));
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

        if ((itemobj.code && itemobj.name && itemobj.qty && itemobj.unitPrize) === "") {
            alert("Submit Failed! Please Input Your Detail");
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
            let printRow = `<tr><th>${this.itemsarray2[i].code}</th><th>${this.itemsarray2[i].name}</th><th>${this.itemsarray2[i].qty}</th><th>${this.itemsarray2[i].unitPriceitem}</th></tr>`;
            $("#item-Table").append(printRow);
        }
        this.clearTextField();
    }

    itemSearch() {
        this.itemsarray2.filter(function (e) {
            if (e._code === $("#searchItem").val()) {
                $("#txtItemid").val(e._code);
                $("#txtItemName").val(e._name);
                $("#txtItemqty").val(e._qty);
                $("#txtItemUnitPrize").val(e._unitPriceitem);
            } else {
                alert("Not Find Item Please try Agin");
            }
        });
    }

    itemUpdateHandle() {

        let upName = $("#txtItemName").val();
        let upqty = $("#txtItemqty").val();
        let upUnit = $("#txtItemUnitPrize").val();

        this.itemsarray2.forEach((e) => {
            if (e._code === $("#txtItemid").val()) {
                e._name = upName;
                e._qty = upqty;
                e.unitPrize = upUnit;
            }
        });
        this.loadAllItem();
    }

    clearTextField() {
        $("#txtItemid").val("");
        $("#txtItemName").val("");
        $("#txtItemqty").val("");
        $("#txtItemUnitPrize").val("")
    }

    //Regex settle
    isValid() {
        let iscode = /^I([0-9]){3,3}$/;
        let isType = /^[A-Za-z]+-[0-9]{4}$|^[A-Za-z\s]+$/;
        let isQty = /^-?\d+(?:\.\d+)?$/;
        let isUnit = /-?\d+(?:\.\d+)?$/;

        if (iscode.test($("#txtItemid").val())) {
            $("#txtItemid").css('border', '2px solid #d63031');
            $("#error-itemId").text(" Follow This : I001").css('color', '#d63031');
            return false;
        } else {
            $("#txtItemid").css('border', '2px solid #26de81');
            $("#error-itemId").text("");
        }
        if (isType.test($("#txtItemName").val())) {
            $("#txtItemName").css('border', '2px solid #d63031');
            $("#error-itemName").text(" Follow This : Laptop").css('color', '#d63031');
        } else {
            $("#txtItemName").css('border', '2px solid #26de81');
            $("#error-itemName").text("");

        }
        if (isQty.test($("#txtItemqty").val())) {
            $("#txtItemqty").css('border', '2px solid #d63031');
            $("#error-itemQty").text(" Follow This : 100").css('color', '#d63031');
        } else {
            $("#txtItemqty").css('border', '2px solid #26de81');
            $("#error-itemQty").text("");

        }
        if (isUnit.test($("#txtItemUnitPrize").val())) {
            $("#txtItemUnitPrize").css('border', '2px solid #d63031');
            $("#error-itemunitPrize").text(" Follow This : 100").css('color', '#d63031');

        } else {
            $("#txtItemUnitPrize").css('border', '2px solid #26de81');
            $("#error-itemunitPrize").text("");

        }


    }


}

new ItemController();