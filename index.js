// function x(){
//     for(var i=0;i<=5;i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(x)
//             },i*1000)
//         }
//         close(i)
//     }
//     console.log("TJ")
// }
// x();



// function outest(c){
//     // var c=100
//     function outer(b){
//         function inner(){
//             console.log(a,b, c)
//         }
//         let a=10
//         return inner;
//     }
//     return outer;
// }

// outest(2)("Hello ")();

// function counter(){
//     var count=0;
//     function increment(){
//         count ++;
//     }
// }

// function aa(){
//     var a=7
// }


// console.log(a)

// let x = 10;

// function outer() {
  
//   function inner() {
//     console.log(x);
//   }
  
//   inner();
// }

// outer(); // 10
// x=5



// const p = new Promise((resolve, reject) => {
//   resolve("Success");
// });

// p.then(result => console.log(result));


// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// var a=outer()
// a()
// a()
// a()

// let x = 1;

// function a() {
//   let y = 2;

//   function b() {
//     let z = 3;
//     console.log(x, y, z);
//   }

//   b();
// }

// a();


// function outer() {
//   let x = 10;

//   function inner() {
//     console.log(x);
//   }

//   return inner;
// }

// const fn = outer();
// fn(); // 10


// //lexical scope

// let a=5

// function f1(){

//     let a=33;
//     function f2(){
//         console.log(a)
//     }
//     f2()
// }
// f1()

// let b=5

// function f3(){
//     console.log(b)
// }

// function f4(){
//     let b=10
//     f3()
// }

// f4()

//closure
// function f1(){
//     let count=0
//     function f2(){
//         console.log(count++)
//     }
//     return f2
// }

// var f=f1()
// f()
// f()


//callback

// setTimeout(function(){
//     console.log("hahaha")

// },3000)

// function a(b){
//     console.log("a")
//     b()
// }

// a(function b(){
//     console.log("b")
// })

// function greet(name,f){
//     console.log("Hola Amigo" + name)
//     f()
// }

// function hello(){
//     console.log("done")
// }

// greet("Tushar",hello)

// function processN(a,func){
//     let res = a * a;
//     func(res)
// }

// processN(33,function(ans){
//     console.log(ans)
// })

// function sum(a,b,fun){
//     let ans=a+b
//     fun(ans)
// }

// sum(30,3,(res)=>console.log(res))


// let arr=[1,2,3,4,5]

// const res=arr.map((n)=>{
//     return n**5
// })

// console.log(res)

let a="c"

const b={
    c:"hello",
};

console.log(b[a])
console.log(b["c"])
console.log(b.a)
console.log(b.c)