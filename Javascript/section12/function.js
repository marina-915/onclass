function showAlert() {
 alert("functionTestが実⾏されました。")
}
showAlert()

var getText = function () {
 return "getTextが実⾏されたのでこのテキストを返します。";
};
console.log(getText());

var getText = function () {
 var text = "getTextが実⾏されたのでこのテキストを返します。";
 console.log(text);
};

//課題
//1. 関数宣⾔を⾏い、実⾏された時にアラート表⽰させるよう処理を作ってください。
function showAlert(){
    alert("こんにちわ")
}
showAlert()

//2.関数式内で計算した結果を返し、それを外部から実⾏してコンソールで表⽰させてください。
var numA = function(){
    return  1+2+3;
};
console.log(numA());

//3.スコープついて調べて⾃分なりの⾔葉でまとめてください
//関数や変数が有効な範囲のこと。関数・変数がどこで使えるかのルール