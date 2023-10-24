//画像ランダム用
const answer = document.getElementById('answer');
const quizArea = document.getElementById('quizArea');
const answerImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/melonpan_board.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/syokupan_board.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/mushi_board.png?raw=true'];
const ZeroquizImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/food_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_melonpan.png?raw=true'];
const OnequizImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bread_syokupan.png?raw=true','./img/bread_syokupan_usui.png', './img/pan_toast_kongari.png', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_mushipan_yellow.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_bread_syokupan.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_bread_syokupan.png?raw=true'];
const TwoquizImages = ['https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true','https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true','./img/pan_mushipan_white.png', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/pan_melonpan.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad1_pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad2_pan_mushipan_yellow.png?raw=true', 'https://github.com/progfly/BreadJudgeGame/blob/main/img/bad3_pan_mushipan_yellow.png?raw=true'];



//判断機能
const judgeArea = document.getElementById('judgeArea');

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






function image(){

  const answerImageNo = Math.floor( Math.random() * answerImages.length)
  answer.src = answerImages[answerImageNo];
  if(answerImageNo===0){
    const ZeroquizImageNo = Math.floor( Math.random() * ZeroquizImages.length)
    quizArea.src = ZeroquizImages[ZeroquizImageNo];
    if(ZeroquizImageNo < 5){
      return 1;
    }
    else{
      return 2;
    }
  }
  if(answerImageNo===1){
    const OnequizImageNo = Math.floor( Math.random() * OnequizImages.length)
    quizArea.src = OnequizImages[OnequizImageNo];
    if(OnequizImageNo < 5){
      return 1;
    }
    else{
      return 2;
    }
  }
  if(answerImageNo===2){
    const TwoquizImageNo = Math.floor( Math.random() * TwoquizImages.length)
    quizArea.src = TwoquizImages[TwoquizImageNo];
    if(TwoquizImageNo < 5){
      return 1;
    }
    else{
      return 2;
    }
  }
  
  }




function start(){

  updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/han_siro.png?raw=true';

  let startTime = Date.now();

  imageJudge = image();

console.log('ここ'+imageJudge);



  quizArea.animate(
    // 途中の状態を表す配列
    [
      { transform: 'translateX(0)'}, // 開始時の状態（左端）
      { transform: 'translateX(450px)' } // 終了時の状態（左端から450pxの位置）
    ], 
    // タイミングに関する設定
    {
      fill: 'forwards', // 再生前後の状態（再生前、終了時の状態を適用）
      duration: 2000, // 再生時間（2000ミリ秒）
     // iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
    },
  );




  document.onkeydown = judge;
  function judge(e){

    let currentTime = Date.now();
    let seconds = (currentTime - startTime) / 1000;

    let keyname = e.key;

    if(imageJudge===1){
      if(keyname === 'y'){
        //quizArea.src = './img/italian.png';
        countBread++;
        judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/maru.png?raw=true';
        //judgeArea.innerText = '正解';

        if(seconds <= 1){
          salary(1)
        }
        
        
        stop()
      }
      if(keyname === 'n'){
        judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/batu.png?raw=true';
        //judgeArea.innerText = '不正解';

        salary(2)
      }
    }
    else{
      if(keyname === 'y')
      {
        judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/batu.png?raw=true';
        //judgeArea.innerText = 'A不正解';
        salary(3)
      }
      if(keyname === 'n')
      {
        judgeArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/maru.png?raw=true';
        //judgeArea.innerText = 'A正解';
        countNon++;

        if(seconds <= 1){
          salary(1)
        }

        stop()
      }
    }
  }
}



  //時給表示
  const displayArea = document.getElementById('displayArea');
  let jikyuu = null;

  const updownArea = document.getElementById('updownArea');

  

  function salary(resrut){


    if( resrut === 1 ){
      niceCount++
      if( niceCount % 3 === 0){
        upCount++
        updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/up.png?raw=true'
      }
    }
    
    if( resrut === 2 ){
      buyCount++
      updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/buy.png?raw=true'
    }

    if( resrut === 3 ){
      badCount++
      if( badCount % 3 === 0){
        downCount++
        updownArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/down.png?raw=true'
      }
    }
    

    console.log(buyCount);
    console.log(upCount);
    console.log(badCount);
    jikyuu = 1200 + (100*upCount) - (100*downCount);
    //console.log(jikyuu);

    if( resrut === 4 ){

      //const gameResrt = Math.max(num1, num2, num3);

      let countSeikai = countBread + countNon;

      return [jikyuu, buyCount,countSeikai];

    }

      displayArea.innerText = '現在の時給' + jikyuu +'円';
      stop()

  }

    
  

  function stop(){
    quizArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true';
  
    setTimeout(() => {
      start()
    }, 1000);
    
  }



  

//タイトル入力
const titleArea = document.getElementById('titleArea');

//var Name = prompt("働きたいパン屋の名前を入力してください");
//titleArea.innerText = Name+'パン';

var Name = prompt("働きたいパン屋の名前を入力してください");

if (answer === '') {
	alert('再度読み込み、何か入力してください');
} else if (answer === null) {
	alert('再度読みこんでください');
} else {
	titleArea.innerText = Name+'パン';

}



//スタートボタン
const gameStart=document.getElementById("gameStart");

const gameStop=document.getElementById("gameStop");

const resrutArea=document.getElementById("resrutArea");



gameStart.addEventListener("click",()=>{

  resrutArea.innerText = '　　　　　'

  let startGameTime = Date.now();

  //プレイヤーのテキストにグーを表示
  console.log('suta-to');

  countBread = 0;
  countNon = 0;
  countSeikai = 0;

  niceCount = 0;
      upCount = null;
      buyCount = 0;
      badCount = null;
      downCount = null;
  
  //judgeArea.innerText = '結果の表示';
  displayArea.innerText = '現在の時給1200円';

  start()

  gameStop.addEventListener("click",()=>{

    quizArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true';

    let currentGameTime = Date.now();
    let gameSeconds = (currentGameTime - startGameTime) / 1000;

    //プレイヤーのテキストにグーを表示
    console.log('stop');
  
    //reset()
  

  
  let ret = salary(4);
  console.log(ret[0]);
  
    document.onkeydown = judge;
    function judge(e){
      let keyname = e.key;
      if(keyname === 'y' && keyname === 'n'){
        keyname=0;
    } 
  }


  let byoukyuu = (ret[0]/60)/60;

  let gameSalary = gameSeconds*byoukyuu;
  


  let buyMony = -(ret[1]*100);

  let sum = gameSalary+buyMony;

  let seikaisuu = ret[2];
  console.log(seikaisuu);

  let sixGameSeconds = gameSeconds.toFixed(6);
  let hanntei = sixGameSeconds/4.000000;

  console.log(hanntei);
  console.log(seikaisuu);


  if(seikaisuu<hanntei)
  {
    resrutArea.innerText = '給料明細\n'+'　判断が遅いので、給料0円　買い取り個数は、'+ret[1]+'個\n'+'　'+-buyMony+'円支払ってください。';
  }
else{
  resrutArea.innerText = '給料明細\n'+'　勤務時間：'+sixGameSeconds+'秒　給料：'+gameSalary.toFixed(6)+'円　買い取り：'+ret[1]+'個\n'+'　収支は、'+sum.toFixed(6)+'円です。';
}

  })


})










/*
function reset(){
  quizArea.src = 'https://github.com/progfly/BreadJudgeGame/blob/main/img/siro.png?raw=true';
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


