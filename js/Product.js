class Product {
    constructor(name, price, author) {
        this._name = name;
        this._price = price;
        this._author = author;
    }

    getName() {
        return this._name;
    }

    getPrice() {
        return this._price;
    }

    getAuthor() {
        return this._author
    }
}
