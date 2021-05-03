function ex01() {
    alert("Alo, Mundo!");
}



   
   function ex02() {

    let ex = document.getElementById('ex2');
     
    if(ex.style.display == 'none'){
        ex.style.display = 'block';
    }else{
        ex.style.display = "none";
    }
}

function display(){
let num = document.getElementById("ex02num").value;

if(!num){
    alert("Favor informar um número");
}else{
  document.getElementById("res2").innerHTML = `O número informado foi ${num}`;
}

}


