let button=document.getElementById("fin")


button.addEventListener('click',checktest);
function checktest(){
    let  res=0;
    let q1=document.getElementById("q1").value;
    if (q1 == 4 ){
        res++;
    }
    let q2=document.getElementById("q2").value
    if (q2 == 10 ){
        res++;
    }
    alert(res  + " правельных ответов")
}
