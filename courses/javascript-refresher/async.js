const fetchData = (callback) => {
    setTimeout(() => {
        callback("Done");
    }, 1500);
};

setTimeout(() => {
    console.log("Timer is done!");
    fetchData((text) => {
        console.log(text);
    }, 2000);
});

const getData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Get");
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("get is done");
    getData()
        .then((data) => {
            console.log(data);
            return getData();
        })
        .then((data2) => {
            console.log(data2);
        });
}, 2000);

console.log("hello");
console.log("hi");
