
let ducInfor = {
    name: "duc",
    address: {
        city: "ha noi"
    }
}

let dungInfor = {
    name: "dung",
    address: ducInfor.address
}

// edit infor dung
dungInfor.name = "manh";
dungInfor.address.city = "ho chi minh";

// thong tin cua duc
console.log(ducInfor.name); // 
console.log(ducInfor.address.city); //  

