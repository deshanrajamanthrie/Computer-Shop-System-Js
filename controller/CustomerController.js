import {Customer} from "../model/Customer.js";
import {customerArray} from "../db/db.js";


export class CustomerController {
    constructor() {
        $("#btnSaveCustomer").click(this.customerHandle.bind(this));


    }


    customerHandle() {

        let id = $("#txtcustomerid").val().trim();
        let name = $("#txtcustomerName").val().trim();
        let address = $("#txtcustomerAddres").val().trim();
        let contact = $("#txtcustomerContact").val().trim();
        let customerObj = new Customer(id, name, address, contact);
        this.saveCustomer(customerObj);

    }

    saveCustomer(cutomerObj) {
        customerArray.push(cutomerObj);
        this.loadAllCustomer();
    }


    loadAllCustomer() {
        $("#customerTable").empty();
        for (let i in customerArray) {
            let printRow = `<tr><th>${customerArray[i].id}</th><th>${customerArray[i].name}</th><th>${customerArray[i].address}</th><th>${customerArray[i].contact}</th></tr>`;
            console.log(printRow);
            $("#customerTable").append(printRow);
        }


    }


}


let customerController = new CustomerController();





