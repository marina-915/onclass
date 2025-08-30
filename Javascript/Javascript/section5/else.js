var boolean = false;
if(boolean){
    console.log("trueの処理")
    console.log(boolean);
}else{
    console.log("falseの処理")
    console.log(boolean);
};

//課題
//1. elseを使⽤する時の注意点
//if文とelseの関係性が切れないように、elseとif文の間にコードを書かない

//2.JavaScriptで実装した時の確認ポイント
//コンソールにエラーが表示されていないか確認する

//3.数値型を⽐較してelseの処理に⼊る処理を作ってください。
var num = 100;
if(num==30){
    console.log("trueの処理")
    console.log(num);
}else{
    console.log("falseの処理")
    console.log(num);
}

//3.⽂字列型を⽐較してelseの処理に⼊る処理を作ってください。
var text = "JavaScript";
if(text=="HTML"){
    console.log("trueの処理")
    console.log(text);
}else{
    console.log("falseの処理")
    console.log(text);
}
