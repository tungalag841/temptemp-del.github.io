var Input = document.getElementById('Inp')
var number = document.querySelectorAll('.number');
var equal = document.querySelector('#calc');  
var Point = document.querySelector('.point');
var Operator = document.querySelectorAll('.operator');
var Clear = document.querySelector('.clear');
var Delete = document.querySelector('.delete');
var check = false;
console.log(Input)
number.forEach(number =>{
    number.addEventListener('click', function(event){
        var i = event.target;
        Input.value += i.innerText; 
        check = true;
    })
})
Operator.forEach(Operator =>{
    Operator.addEventListener('click', function(event){
        var Str = Input.value
        if(Str.charAt(Str.length-1)=="."){
            var z = event.target;
            Input.value += "1" +z.innerText;
            check = false;
        }else if(check == true){
            var z = event.target;
            Input.value += z.innerText;
            check = false;
        }
    })
})
equal.addEventListener('click', Equals);
    function Equals(){
        Input.value = eval(Input.value);
    }
Point.addEventListener("click", function(){
    var Str = Input.value;
    if(Str.charAt(Str.length-1)=="."){
        return;
    }else{
        Input.value += Point.innerText;
    }
})
Clear.addEventListener('click', cl);
function cl(){
    var item = Input.value;
    Input.value = item.slice(0,-1);
}
Delete.addEventListener('click', dl);
function dl(){
    Input.value = "";
}
//