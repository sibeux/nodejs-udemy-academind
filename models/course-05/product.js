const fs = require("fs");
const path = require("path");

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(
            path.dirname(require.main.filename),
            "..",
            "..",
            "data",
            "course-05",
            "products.json"
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // Dikasih "static" biar bisa langsung dipanggil Product.fetchAll()
    static fetchAll() {
        const p = path.join(
            path.dirname(require.main.filename),
            "..",
            "..",
            "data",
            "course-05",
            "products.json"
        );
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
};
