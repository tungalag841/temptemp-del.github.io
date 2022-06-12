var x = document.getElementById("body");
var input = document.getElementById("Inp");
var y = ["purple"]
var i = 0;
function save(){
    y.push(input.value);
    console.log(y)
}
function changeBack(){
    if(i==y.length){
        i = 0;
        x.style.backgroundColor = y[i]
    }
    x.style.backgroundColor = y[i]
    i++
}