const products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        products.push(this);
    }

    // Dikasih "static" biar bisa langsung dipanggil Product.fetchAll()
    static fetchAll() {
        return products;
    }
};
