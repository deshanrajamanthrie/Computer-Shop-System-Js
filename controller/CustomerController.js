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
            if (customerObj.id === "") {
                if (customerObj.name === "") {
                    if (customerObj.address === "") {
                        if (customerObj.contact === "") {
                            alert("Cannot added the table Please Enter the Contact Number");
                            return;
                        }
                        alert("Cannot added the table Please Enter the Address");
                        return;
                    }
                    alert("Cannot added the table Please Enter the Name ");
                    return;
                }
                alert("Cannot added the table Please Enter the Id ");
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


    IsValid() {
        let isId = /^C([0-9]){3,3}$/;
        let isName = /^([A-z]){2,}$/;
        let isAddress = /^([A-z]){2,}$/;
        let isContact = /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;


        if (!isId.test($("#txtcustomerid").val())) {
            $("#txtcustomerid").css('border', 'red');
            $("#error-id").text(" Follow This : C001").css('color', 'red');
            return false;
        } else {
            if (!isName.test($("#txtcustomerName").val())) {
                $("#txtcustomerName").css('border', 'red');
                $("#error-name").text("Follow This: Saman Kumara").css('color', 'red');
                return false;
            } else {
                if (!isAddress.test($("#txtcustomerAddres").val())) {
                    $("#txtcustomerAddres").css('border', 'red');
                    $("#error-address").text("Follow This:Colombo").css('color', 'red');
                    return false;
                } else {
                    if (!isContact.test($("#txtcustomerContact").val())) {
                        $("#txtcustomerContact").css('border', 'red');
                        $("#error-contact").text("Follow This :0777777777 ");
                        return false;
                    } else {
                        return false;
                    }
                }
            }


        }


    }


}


let customerController = new CustomerController();





