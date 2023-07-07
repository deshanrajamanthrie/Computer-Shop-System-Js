import {Customer} from "../model/Customer.js";
import {customerArray} from "../db/db.js";


export class CustomerController {
    constructor() {
        $("#btnSaveCustomer").click(this.customerHandle.bind(this));


    }


    customerHandle() {
        for (let i of customerArray) {
            if (i.id === $("#txtcustomerid").val().trim()) { //Check the customer Id before include it
                alert("Already Customer has been Exists!");
                this.cleartextFields();
                return;     //not run in the code
            }
        }
        let id = $("#txtcustomerid").val().trim();
        let name = $("#txtcustomerName").val().trim();
        let address = $("#txtcustomerAddres").val().trim();
        let contact = $("#txtcustomerContact").val().trim();
        let customerObj = new Customer(id, name, address, contact);
        if (customerObj.id === "") {     //================notiyfy the text fields ara empty or not
            alert("Please Include The Data !");
            return;
        } else if (customerObj.name === "") {
            alert("Please Include The Data !");
            return;
        } else if (customerObj.address === "") {
            alert("Please Include The Data !");
            return;
        } else if (customerObj.contact === "") {
            alert("Please Include The Data !");
            return;
        } else {
            this.saveCustomer(customerObj);
        }


    }

    saveCustomer(cutomerObj) {// ==================================================only customer Save

        customerArray.push(cutomerObj);
        this.loadAllCustomer();


    }


    loadAllCustomer() {
        $("#customerTable").empty();                                 //this use statement for do empty table
        for (let i in customerArray) {
            let printRow = `<tr><th>${customerArray[i].id}</th><th>${customerArray[i].name}</th><th>${customerArray[i].address}</th><th>${customerArray[i].contact}</th></tr>`;
            console.log(printRow);
            $("#customerTable").append(printRow);
            this.cleartextFields();
        }
    }


    cleartextFields() {
        $("#txtcustomerid").val("");
        $("#txtcustomerName").val("");
        $("#txtcustomerAddres").val("");
        $("#txtcustomerContact").val("");
    }


}


let customerController = new CustomerController();





