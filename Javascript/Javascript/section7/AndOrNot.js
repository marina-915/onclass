var numA = 10;
var numB = 40;
if (numA == 20 && numB == 40) {
 console.log("ANDの条件と⼀致した処理");
 console.log(numA == 20 && numB == 40);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(numA == 20 && numB == 40);
};

var numA = 10;
var numB = 20;
if (numA == 20 || numB == 40) {
 console.log("ORの条件と⼀致した処理");
 console.log(numA == 20 || numB == 40);
} else {
 console.log("ORの条件と⼀致しなかった処理");
 console.log(numA == 20 || numB == 40);
};

var boolean = false;
if (!boolean) {
 console.log("NOTの条件と⼀致した処理");
 console.log(boolean);
} else {
 console.log("NOTの条件と⼀致しなかった処理");
 console.log(boolean);
};

//課題
//1.AND(&&)の条件を作成し、その処理に⼊るよう作ってください。（elseの処理も作成してください）
var numA = 10;
var numB = 30;
if(numA == 10 && numB == 30){
    console.log("ANDの条件と一致した処理")
    console.log(numA == 10 && numB == 30)
}else{
    console.log("不一致")
    console.log(numA == 10 && numB == 30)
};

//2.OR(||)の条件を作成し、その処理に⼊るよう作ってください。（elseの処理も作成してください）
var numA = 10;
var numB = 30;
if(numA == 10 || numB == 30){
    console.log("ORの条件と一致した処理")
    console.log(numA == 10 || numB == 30)
}else{
    console.log("不一致")
    console.log(numA == 10 || numB == 30)
};

//3.NOT(!)の条件を作成し、その処理に⼊るよう作ってください。⽐較条件は数値型の⽐較でお願いします。（elseの処理も作成してください）
var num = 0;
if(!num){
    console.log("NOTの条件と一致した処理")
    console.log(num)
}else{
    console.log("NOTの処理と一致しなかった処理")
    console.log(num)
}