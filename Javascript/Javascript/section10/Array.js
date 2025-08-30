var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits);
console.log(fruits[0]);

var teacher = {
 name: "太郎",
 age: 25,
 subject: "国語",
}
console.log(teacher);
console.log(teacher.name);

var teachers = [
 {
 name: "太郎",
 age: 25,
 subject: "国語",
 },
 {
 name: "浩司",
 age: 30,
 subject: "数学",
 },
 {
 name: "花⼦",
 age: 26,
 subject: "社会",
 }
 ];

console.log(teachers);

//課題
//1. 3つ以上の値を⽤意して変数に代⼊してください。その1番⽬と3番⽬をコンソールで表⽰してください。
var number =["1","2","3"];
console.log(number[0]);
console.log(number[2]);

//2. key、value、プロパティーについて説明してください。
//keyはオブジェクトのプロパティ名、valueはその値のこと

//3.3つほどプロパティを⽤意したオブジェクトを⽤意してコンソールで表⽰してください。
var person = {
    name : "Make",
    age : 20,
    tall : 170,
}
console.log(person);

//4.オブジェクトを3つ⽤意してそれを配列として代⼊してください。
// 配列の0番⽬と3番⽬を表⽰させ、その中のkeyを指定してコンソールに表⽰させてください。
var person =[
{
    name : "Haru",
    age : 30,
    tall :183,
},
{
    name : "Minato",
    age : 28,
    tall : 173,
},
{
    name : "Hayato",
    age : 33,
    tall : 182,
}
];
console.log(person[0].name);
console.log(person[2].name);