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
                return;                                       //=======================================================not run in the code
            }
        }

        if (this.IsValid()) {
            let id = $("#txtcustomerid").val().trim();
            let name = $("#txtcustomerName").val().trim();
            let address = $("#txtcustomerAddres").val().trim();
            let contact = $("#txtcustomerContact").val().trim();
            let customerObj = new Customer(id, name, address, contact);
            if (customerObj.id === "") {
                alert("Submit Failed! Please Input Your Detail.");
                return;
            } else {
                this.saveCustomer(customerObj);
            }
        }
    }

    saveCustomer(cutomerObj) {                           //===================================================only customer Save

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


    IsValid() {
        //===============================================================================Regex Patterns
        let isId = /^C([0-9]){3,3}$/;
        let isName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)$/;
        let isAddress = /^([A-z]){2,}$/;
        let isContact = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;


        if (!isId.test($("#txtcustomerid").val())) {
            $("#txtcustomerid").css('border', '2px solid #d63031');
            $("#error-id").text(" Follow This : C001").css('color', '#d63031');
            return false;
        } else {
            $("#txtcustomerid").css('border', '2px solid #26de81');
            $("#error-id").text("");
        }
        if (!isName.test($("#txtcustomerName").val())) {
            $("#txtcustomerName").css('border', '2px solid #d63031');
            $("#error-name").text("Follow This: Saman Kumara").css('color', '#d63031');
            return false;
        } else {
            $("#txtcustomerName").css('border', '2px solid #26de81');
            $("#error-name").text("");
        }
        if (!isAddress.test($("#txtcustomerAddres").val())) {
            $("#txtcustomerAddres").css('border', '2px solid #d63031');
            $("#error-address").text("Follow This:Colombo").css('color', '#d63031');
            return false;
        } else {
            $("#txtcustomerAddres").css('border', '2px solid #26de81');
            $("#error-address").text("");
        }
        if (!isContact.test($("#txtcustomerContact").val())) {
            $("#txtcustomerContact").css('border', '2px solid #d63031');
            $("#error-contact").text("Follow This :0777777777 ").css('color', '#d63031');
            return false;
        } else {
            $("#txtcustomerContact").css('border', '2px solid #26de81');
            $("#error-contact").text("");
        }
        return true;
    }
}


let customerController = new CustomerController();





