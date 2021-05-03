
   //EXERCICO 1

function ex01() {
    alert("Alo, Mundo!");
}

   //EXERCICO 1

   //EXERCICO 2
   function ex02() {
    let ex2 = document.getElementById('ex2');
     
    if(ex2.style.display == 'block'){
        ex2.style.display = 'none';
    }else{
        ex2.style.display = "block";
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

   //EXERCICO 2

   //EXERCICO 3

   function ex03() {
    let ex3 = document.getElementById('ex3');
     
    if(ex3.style.display == 'block'){
        ex3.style.display = 'none';
    }else{
        ex3.style.display = "block";
    }
}

    function display3(){
        let num1 = document.getElementById("ex03num").value;
        let num2 = document.getElementById("ex03num2").value;
        let total = parseInt(num1) + parseInt(num2);

        if(!num1 || !num2){
            alert("Favor informar um número");
        }else{
        document.getElementById("res3").innerHTML = `A resposta de ${num1} e ${num2} é de ${total}`;
        }
    }
