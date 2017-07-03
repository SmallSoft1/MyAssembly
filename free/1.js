// var tracrur = require('traceur');
// var fs = require('fs');

// //将ES6脚本转换成字符串
// var contents = fs.readFileSync('es6-file.js').toString();
// var result = traceur.compile(contents,{
//     filename:'es6-file.js',
//     sourceMap:ture,
//     //其他设置
//     modules:'commonjs'
// });

// if (result.error) 
//     throw result.error;

// //result对象的js属性就是转换后的ess代码
// fs.writeFileSync('out.js',result.js);
// //sourceMap属性对应map文件
// fs.writeFileSync('out.js.map',result.sourceMap);

//let用法，相当于变量声明，但是let只用在块级作用域，该区域不受外部影响。var作用于全局变量
// var a = [];
// for(let i = 0; i < 10; i++){
//     a[i]  = function(){
//         console.log(i);
//     };
// }
// a[6]();

//do表达式
// let x = do {
//     let t = f();
//     t*t+1;
// };
// console.log(x);

//const命令，声明一个只读的常量，值不可变。声明的变量不可重复
// const PI=3.1415926;
// // PI = 3;值不可变
// console.log(PI);

// //赋值,嵌套赋值
// var obj = {
//     p:[
//         'hello',
//         {y:'world'}
//     ]
// };
// var {p:[x,{y}]} = obj;
// //x'hello'y'world'
// console.log(x,y);

// //字符串赋值
// const[a,b,c,d,e] = 'hello';
// console.log(a,b,c,d,e);

// //提取json数据
// var jsonData = {
//     id:42,
//     status:"OK",
//     data:[867,5309]
// };
// let {id,status,data:number} = jsonData;

// console.log(id,status,number);

// //遍历map结构
// var map = new Map();
// map.set('first','hello');
// map.set('second','world');
// for(let[key,value] of map){
//     console.log(key + " is " + value);
// }

// console.log("\u0061");//a
// console.log("\uD842\uDFB7");//𠮷

//codePointAt()转换为字符形式,返回的码点是十进制，若想要六进制在后面加.toString(16)
// var s = '𠮷a';
// console.log(s.codePointAt(0));//134071
// console.log(s.codePointAt(1));//57271
// console.log(s.codePointAt(2));//97

// var s = '𠮷a';
// for(let ch of s){
//     console.log(ch.codePointAt(0).toString(16));
// }

// //字符串的遍历接口
// var text = String.fromCodePoint(0x20BB7);
// for(let i = 0; i < text.length; i++){
//     console.log(text[i]);
// }//传统的for循环识别不出字符
// for(let i of text){
//     console.log(i);
// }

// //at()传统的charAt()不能识别码点大于0xFFFF的字符，at()可以
// console.log('abc'.charAt(0));
// console.log('𠮷'.charAt(0));//无法识别
// console.log('abc'.at(0));
// console.log('𠮷'.at(0));

// //padStart()用于头部补全,padEnd()用于尾部补全若元字符串的长度等于或大于指定的最小长度，则返回原字符串。若省略第二个参数则会用空格补全长度
// 'x'.padStart(5,'ab');//ababx
// 'x'.padEnd(5,'ab');//xabab


//模板字符串,可嵌套
// #('#result').append('There are <b>${basket.count}</b> items in your basket,<em>${basket.onSale}</em> are on sale!');

// var obj = {x:1,y:2};
// '${obj.x + obj.y}';
// var sum = obj.x + obj.y;
// console.log(sum);