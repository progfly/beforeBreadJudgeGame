//タイトル入力場所
const titleArea = document.getElementById('titleArea');
//ボタンふたつ
const gameStart = document.getElementById("gameStart");
const gameStop = document.getElementById("gameStop");
//給料明細表示場所
const resrutArea = document.getElementById("resrutArea");
//画像表示場所
const answerArea = document.getElementById('answerArea');
const quizArea = document.getElementById('quizArea');
//見本画像
const answerImages = ['./img/melonpan_board.png', './img/syokupan_board.png', './img/mushi_board.png'];
//No0～4正しい画像　5~9間違え画像
const ZeroquizImages = ['./img/pan_melonpan.png', './img/pan_melonpan.png', './img/pan_melonpan.png', './img/pan_melonpan.png', './img/pan_melonpan.png', './img/food_melonpan.png', './img/bread_syokupan.png', './img/bad1_pan_melonpan.png', './img/bad2_pan_melonpan.png', './img/bad3_pan_melonpan.png'];
const OnequizImages = ['./img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan.png', './img/bread_syokupan_usui.png', './img/pan_toast_kongari.png', './img/pan_mushipan_yellow.png', './img/bad1_bread_syokupan.png', './img/bad2_bread_syokupan.png'];
const TwoquizImages = ['./img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_yellow.png', './img/pan_mushipan_white.png', './img/pan_melonpan.png', './img/bad1_pan_mushipan_yellow.png', './img/bad2_pan_mushipan_yellow.png', './img/bad3_pan_mushipan_yellow.png'];

const images = ['./img/log.png','./img/board.png','./img/siro.png','./img/han_siro.png','./img/konbea.png','./img/maru.png','./img/batu.png','./img/up.png','./img/down.png','./img/buy.png'];
//判断表示
const judgeArea = document.getElementById('judgeArea');
//時給表示
const updownArea = document.getElementById('updownArea');
const displayArea = document.getElementById('displayArea');





//正解カウント
let countBread = 0;
let countNon = 0;
let countSeikai = 0;

//昇給減給結果
let resrut = null;
//昇給カウント
let niceCount = 0;
let upCount = null;
let buyCount = 0;
let badCount = null;
let downCount = null;

let imageJudge = 0;

let jikyuu = null;

let allStop = 0;



  // 画像プリロード
window.onload = function(){
    
  getImages();
  
}

// 画像プリロード用関数
function getImages(){
  for (i = 0; i < answerImages.length; i++){
      var img = document.createElement('img');
      img.src = answerImages[i];
  }
  for (i = 0; i < ZeroquizImages.length; i++){
    var img = document.createElement('img');
    img.src = ZeroquizImages[i];
}
for (i = 0; i < OnequizImages.length; i++){
  var img = document.createElement('img');
  img.src = OnequizImages[i];
}
for (i = 0; i < TwoquizImages.length; i++){
  var img = document.createElement('img');
  img.src = TwoquizImages[i];
}
for (i = 0; i < images.length; i++){
  var img = document.createElement('img');
  img.src = images[i];
}
}




var Name = prompt("働きたいパン屋の名前を入力してください");
if (Name === '') {
  alert('再度読み込み、何か入力してください');
} else if (Name === null) {
  alert('再度読みこんでください');
} else {
  titleArea.innerText = Name + 'パン';
}

var startGameTime;


gameStart.addEventListener("click", () => {

  resrutArea.innerText = '　　　　　'

  startGameTime = Date.now();

  

  noJudge=0;

  allStop=0;

  console.log('suta-to');

  countBread = 0;
  countNon = 0;
  countSeikai = 0;

  niceCount = 0;
  upCount = null;
  buyCount = 0;
  badCount = null;
  downCount = null;

  displayArea.innerText = '現在の時給1200円';

  start()

})

var noJudge;

gameStop.addEventListener("click", () => {

  quizArea.src = './img/siro.png';


  noJudge=1;

  allStop++

  /*
  document.onkeydown = judge;
  function judge(e) {
   
    let keyname = e.key;
    if (keyname === 'y' && keyname === 'n') {
      keyname = 0;
    }
  }
*/  

  let currentGameTime = Date.now();
  let gameSeconds = (currentGameTime - startGameTime) / 1000;

  console.log('stopしたよ' + gameSeconds);

  let ret = salary(4);
  console.log(ret[0]);


  let byoukyuu = (ret[0] / 60) / 60;
  let gameSalary = gameSeconds * byoukyuu;
  let buyMony = -(ret[1] * 100);
  let sum = gameSalary + buyMony;

  let seikaisuu = ret[2];
  console.log(seikaisuu);

  let sixGameSeconds = gameSeconds.toFixed(6);
  let hanntei = sixGameSeconds / 3.000000;

  console.log(hanntei);
  console.log(seikaisuu);

  if(allStop<2){
  if (seikaisuu < hanntei) {
    resrutArea.innerText = '給料明細\n' + '　判断が遅いので、給料0円　買い取り個数は、' + ret[1] + '個\n' + '　' + -buyMony + '円支払ってください。';
  }
  else {
    resrutArea.innerText = '給料明細\n' + '　勤務時間：' + sixGameSeconds + '秒　給料：' + gameSalary.toFixed(6) + '円　買い取り：' + ret[1] + '個\n' + '　収支は、' + sum.toFixed(6) + '円です。';
  }
}
else{
  resrutArea.innerText = 'もう一度遊ぶ場合は、開始ボタンをおしてください'
}

})



function image() {

  const answerImageNo = Math.floor(Math.random() * answerImages.length)
  answerArea.src = answerImages[answerImageNo];


  if (answerImageNo === 0) {
    const ZeroquizImageNo = Math.floor(Math.random() * ZeroquizImages.length)
    quizArea.src = ZeroquizImages[ZeroquizImageNo];
    if (ZeroquizImageNo < 5) {
      return 1;
    }
    else {
      return 2;
    }
  }
  if (answerImageNo === 1) {
    const OnequizImageNo = Math.floor(Math.random() * OnequizImages.length)
    quizArea.src = OnequizImages[OnequizImageNo];
    if (OnequizImageNo < 5) {
      return 1;
    }
    else {
      return 2;
    }
  }
  if (answerImageNo === 2) {
    const TwoquizImageNo = Math.floor(Math.random() * TwoquizImages.length)
    quizArea.src = TwoquizImages[TwoquizImageNo];
    if (TwoquizImageNo < 5) {
      return 1;
    }
    else {
      return 2;
    }
  }

}


var startTime;

function start() {

  updownArea.src = './img/han_siro.png';

  startTime = Date.now();

  imageJudge = image();

  console.log('ここ' + imageJudge);

  quizArea.animate(
    // 途中の状態を表す配列
    [
      { transform: 'translateX(0)' }, // 開始時の状態（左端）
      { transform: 'translateX(450px)' } // 終了時の状態（左端から450pxの位置）
    ],
    // タイミングに関する設定
    {
      fill: 'forwards', // 再生前後の状態（再生前、終了時の状態を適用）
      duration: 2000, // 再生時間（2000ミリ秒）
      // iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
    },
  );
}

document.onkeydown = judge;
function judge(e) {

  let currentTime = Date.now();
  let seconds = (currentTime - startTime) / 1000;

  let keyname = e.key;

 
  if(noJudge===1){
    keyname = 0;
  }

  

  if (imageJudge === 1) {
    if (keyname === 'y') {
      //quizArea.src = './img/italian.png';
      countBread++;
      judgeArea.src = './img/maru.png';
      //judgeArea.innerText = '正解';
      if (seconds <= 1) {
        salary(1)
      }
      stop()
    }
    if (keyname === 'n') {
      judgeArea.src = './img/batu.png';
      //judgeArea.innerText = '不正解';

      salary(2)
    }
  }
  else {
    if (keyname === 'y') {
      judgeArea.src = './img/batu.png';
      //judgeArea.innerText = 'A不正解';
      salary(3)
    }
    if (keyname === 'n') {
      judgeArea.src = './img/maru.png';
      //judgeArea.innerText = 'A正解';
      countNon++;

      if (seconds <= 1) {
        salary(1)
      }

      stop()
    }
  }
}









function salary(resrut) {

  if (resrut === 1) {
    niceCount++
    if (niceCount % 3 === 0) {
      upCount++
      updownArea.src = './img/up.png'
    }
  }

  if (resrut === 2) {
    buyCount++
    updownArea.src = './img/buy.png'
  }

  if (resrut === 3) {
    badCount++
    if (badCount % 3 === 0) {
      downCount++
      updownArea.src = './img/down.png'
    }
  }


  console.log(buyCount);
  console.log(upCount);
  console.log(badCount);
  jikyuu = 1200 + (100 * upCount) - (100 * downCount);
  //console.log(jikyuu);

  if (resrut === 4) {

    //const gameResrt = Math.max(num1, num2, num3);

    let countSeikai = countBread + countNon;

    return [jikyuu, buyCount, countSeikai];

  }

  displayArea.innerText = '現在の時給' + jikyuu + '円';
  stop()

}




  function stop(){
    quizArea.src = './img/siro.png';
   setTimeout(() => {
      start()
    },200);
   
    
  }






















/*
function reset(){
  quizArea.src = './img/siro.png';
  displayArea.innerText = 'おわり';

let ret = salary(4);
console.log(ret[0]);
console.log(ret[1]);

  document.onkeydown = judge;
  function judge(e){
    let keyname = e.key;
    if(keyname === 'y' && keyname === 'n'){
      keyname=0;
  } 

}

}
*/


