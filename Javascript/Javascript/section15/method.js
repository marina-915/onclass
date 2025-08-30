 const teacher = {
     name: "太郎",  subject: "国語", 
     profile: function() { console.log("担当教科は国語です"); } 
    }

teacher.profile()

function sumNum(x) {
 const result = x + 1
 console.log(result);
};
sumNum(1)



function tomato(price, func) {
 const name = "トマト";
 func(name, price);
}
const showPrice = function price(name, price) {
 console.log(name + " の値段は" + price + "円です。");
}
tomato(100, showPrice);

//課題
//1. プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。

//プロパティー：オブジェクトのkeyとvalueのセットのこと
//メソッド：オブジェクトのvalueが関数になっているもの

const dog = {
    name: "マロン", dogBreed: "toyPoodle",
    dogName: function(){console.log("飼っている犬の名前はマロンです。");}
}
dog.dogName()

const game = {
    name: "The Legend of Zelda", series: "Breath of the wild",
    release: function(){console.log("ブレスオブザワイルドは、2017年3月3日に発売されました。");}
}
game.release()

const comic = {
    name: "ChainsawMan", genre: "DarkFantasy",
    author: function(){console.log("チェンソーマンの作者は藤本タツキです。");}
}
comic.author()

//2. 下記の関数を実⾏してその結果をコンソールに表⽰してください。
// （スコープ内に書く⽅法はだめです。）
function fruit(name, price) {
 const result = name + "の値段は" + price + "円です。"
 return result
}
console.log(fruit("リンゴ", 100));

//3. 下記の関数を経由して2つの関数を実⾏するような処理を作ってください。
/*
function addTax(price, func) {
  priceは値段
  funcは実⾏する関数名
  税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
 const taxPrice = Math.round(price * 1.10);
}
 トマトの税込み価格をコンソールに表⽰させる処理
 ⽟ねぎの税込み価格をコンソールに表⽰させる処理

 */

 function addTax(price, func) {
    const taxPrice = Math.round(price * 1.10);
    func(taxPrice);
}

function showTomato(taxPrice){
    console.log("トマトの値段は" + taxPrice + "円です。");
}

// ⽟ねぎの税込み価格をコンソールに表⽰させる処理
function showOnion(taxPrice){
    console.log("玉ねぎの値段は" + taxPrice + "円です。");
} 

addTax(100, showTomato)
addTax(120, showOnion)