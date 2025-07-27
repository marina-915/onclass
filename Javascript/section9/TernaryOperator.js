//課題
//1. 変数の中にtrueまたは、falseが代⼊された時の処理を作ってください。
var boolean =true;
var resultText = "";
var resultText = boolean ? "trueの処理" : "falseの処理";
console.log(resultText);

//2. 代⼊された変数の中が5より⼤きい時にtrueの処理と、5より⼩さい時にfalseの処理を作ってください。
var x = 6
var resultText = x>5 ? "trueの処理" : "falseの処理";
console.log(resultText);

//3. 代⼊された変数の中が5より⼩さい時にtrueの処理と、5より⼩さい時にfalseの処理を作ってください。
var x = 6
var resultText = x<5 ? "trueの処理" : "falseの処理";
console.log(resultText);

//4. 代⼊された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。
var x = 15
var resultText = x>=10 ? "trueの処理" : "falseの処理";
console.log(resultText);

//5. 代⼊された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。
var x = null
var resultText = x ? "trueの処理" : "falseの処理";
console.log(resultText);