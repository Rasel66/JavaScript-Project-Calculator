function DeleteMe(){
    document.getElementById('MyResult').value = '';
}

function calculator(newValue){
    document.getElementById('MyResult').value += newValue;
}

function Answer(){
    var a = document.getElementById('MyResult').value;
    var b = eval(a);
    document.getElementById('MyResult').value = b;
}