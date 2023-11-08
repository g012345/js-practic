var k=document.getElementById("k");
var n=document.getElementById("n");
var b=document.getElementById("b");
var userr=0;
k.addEventListener('click',function(){
  let rand =Math.floor(Math.random()*3+1);
    userr="1";
    var itog=userr+rand; 
    if(itog==11){
      alert('ничья');
    }else if(itog==12){
      alert('ты выйграл');
    }else alert('ты проиграл')
});
n.addEventListener('click',function(){
  let rand =Math.floor(Math.random()*3+1);
    userr="2";
    var itog=userr+rand;
    if(itog==22){
      alert('ничья');
    }else if(itog==23){
      alert('ты выйграл');
    }else alert('ты проиграл')
});
b.addEventListener('click',function(){
  let rand =Math.floor(Math.random()*3+1);
    userr="3";
    var itog=userr+rand;
    if(itog==33){
      alert('ничья');
    }else if(itog==31){
      alert('ты выйграл');
    }else alert('ты проиграл')
});