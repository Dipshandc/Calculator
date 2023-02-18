// veriables
let calArr =[]
const calDis = document.getElementById("dis-p")
const resultDis = document.getElementById("display-p")

function store(a){
calDis.innerHTML += a
if(calArr[0]== undefined){
    calArr
}
}
function startBracket(){
    calDis.innerHTML += "("
}
function closingBracket(){
    calDis.innerHTML += ")"          
}
function forMul(){
    calDis.innerHTML += "*"
}
function forDiv(){
    calDis.innerHTML += "/"
}
function forDot(){
    calDis.innerHTML += "."
}
function forAdd(){
    calDis.innerHTML += "+"
}
function forSub(){
    calDis.innerHTML += "-"
}
function forMod(){
    calDis.innerHTML += "%"
}
function displayResult(){
    result = calDis.innerText
    resultDis.innerHTML = eval(result)
}
function forClear(){
    calDis.innerHTML = calDis.innerHTML.substring(0,calDis.innerHTML.length-1)
    resultDis.innerHTML = ""
}