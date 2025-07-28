for (var i = 1; i < 10; i++) {
 console.log("ループ" + i + "回⽬");
};

var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
 console.log(items[index]);
};

var teachers = [ { name: "太郎", age: 25, subject: "国語", }, { name: "浩司", age:
30, subject: "数学", }, { name: "花⼦", age: 26, subject: "社会", } ] 
for (teacher of teachers) {
 console.log(teacher); 
};

//課題
//1.forを使ったループ処理を作ってください。
for(var i = 2; i < 10; i+=2){
    console.log( i +"は2の倍数");
};

//2.for inを使ったループ処理を作ってください。
var colors = ["あお","あか","きいろ","みずいろ","むらさき"]
for (index in colors){
    console.log(colors[index]);
};

//3.for ofを使ったループ処理を作ってください。
var students = [{ name:"Haru", age:18, favorite:"science",},{ name:"Kei,", age:19, favorite:"sports",},
    {name:"Tojiro", age:20, favorite:"singing",}, ]
for ( student of students){
    console.log(student);
};