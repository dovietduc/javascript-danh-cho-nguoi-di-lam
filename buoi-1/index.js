// 1. Khai báo biến với từ khoá var (truước khi có es6)

// 1.1 Với từ khoá var biến có thể được khai báo lại trong cùng 1 scope
// var x = 5;
// var x = 10;

// console.log(x);

// 1.2 khi nói đến từ khoá var thì các bạn nghĩ đến ngay function scope
// var y = 10;
// if(true) {
//     var y = 20;
// }
// console.log(y);


var name = "global scope";

function inner() {
    var name = "local scope innner function";
    if(true) {
        var name = "local scope innner function in IF";
    }
    console.log('name', name);
}
inner();





// 2. khai báo biến với từ khoá let, cont(es6)


