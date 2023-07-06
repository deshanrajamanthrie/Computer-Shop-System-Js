import {Customer} from "../model/Customer.js";
import {customerArray} from "../db/db.js";


export class CustomerController {
    constructor() {
        $("#btnSaveCustomer").click(this.customerHandle.bind(this));


    }


    customerHandle() {
        let custId = $("#txtcustomerid").val().trim();
        let custName = $("#txtcustomerName").val().trim();
        let custAddress = $("#txtcustomerAddres").val().trim();
        let custContact = $("#txtcustomerContact").val().trim();
        this.saveCustomer = new Customer(custId, custName, custAddress, custContact);
    }

    saveCustomer(customer) {
        customerArray.push(customer);
        this.loadAllCustomer();

    }

    loadAllCustomer() {
        for () {

        }


    }


}


let customerController = new CustomerController();





