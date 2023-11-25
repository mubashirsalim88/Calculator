function equation(val){
document.getElementById("display").value+=val;
}

function calculation(val){
    var a= document.getElementById("display").value;
var c=eval(a)
document.getElementById("display").value=c;
}

function clearbtn(val){
    document.getElementById("display").value=" ";

}