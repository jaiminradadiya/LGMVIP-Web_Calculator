function clearScreen() {
    document.getElementById("result").value = "";
}


function display(value) {
    document.getElementById("result").value += value;
}


function calculate() {
    var r = document.getElementById("result").value.replace('x', "*");
    console.log(r)
    var j = eval(r);
    document.getElementById("result").value = j;
}
