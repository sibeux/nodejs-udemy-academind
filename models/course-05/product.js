const fs = require("fs");
const { get } = require("http");
const path = require("path");

const p = path.join(
    path.dirname(require.main.filename),
    "..",
    "..",
    "data",
    "course-05",
    "products.json"
);

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};
module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // Dikasih "static" biar bisa langsung dipanggil Product.fetchAll()
    static fetchAll(cb) {
        getProductFromFile(cb);
    }
};
