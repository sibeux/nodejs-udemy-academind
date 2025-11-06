const path = require("path");

// ini akan mengambil direktori dari file utama yang menjalankan aplikasi (app.js)
module.exports = path.dirname(require.main.filename);
