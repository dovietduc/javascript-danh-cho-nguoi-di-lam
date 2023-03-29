// 1. pass by value --- kieu du lieu nguyen thuy
// 2. pass by reference --- kieu du lieu object


function changeName(nameChange) {
    // let nameChange = nameinfor;
    nameChange.name = "dung";
}

let nameinfor = {
    name: "ducdo"
};
changeName(nameinfor);

// 
console.log('nameinfor', nameinfor);


// object type --- mutation