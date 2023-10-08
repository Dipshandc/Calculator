// veriables
// let calArr =[]
const calDis = document.getElementById("dis-p")
const resultDis = document.getElementById("display-p")

function store(a){
calDis.innerHTML += a
// if(calArr[0]== undefined){
//     calArr
// }
resultDis.innerHTML = ""
}
function startBracket(){
    calDis.innerHTML += "("
    resultDis.innerHTML = ""
}
function closingBracket(){
    calDis.innerHTML += ")"    
    resultDis.innerHTML = ""      
}
function forMul(){
    calDis.innerHTML += "*"
    resultDis.innerHTML = ""
}
function forDiv(){
    calDis.innerHTML += "/"
    resultDis.innerHTML = ""
}
function forDot(){
    calDis.innerHTML += "."
    resultDis.innerHTML = ""
}
function forAdd(){
    calDis.innerHTML += "+"
    resultDis.innerHTML = ""
}
function forSub(){
    calDis.innerHTML += "-"
    resultDis.innerHTML = ""
}
function forMod(){
    calDis.innerHTML += "%"
    resultDis.innerHTML = ""
}
function displayResult(){
    result = calDis.innerText
    resultDis.innerHTML = eval(result)
}
function forClear(){
    calDis.innerHTML = calDis.innerHTML.substring(0,calDis.innerHTML.length-1)
    resultDis.innerHTML = ""
}