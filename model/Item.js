export class Item {
    get code() {
        return this._code;
    }

    set code(value) {
        this._code = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get unitPrice() {
        return this._unitPrice;
    }

    set unitPrice(value) {
        this._unitPrice = value;
    }
    constructor(code,name,qty,unitPrice) {
        this._code=code;
        this._name=name;
        this._qty=qty;
        this.unitPrize=unitPrice;
        this._unitPrice = unitPrice;
    }
}