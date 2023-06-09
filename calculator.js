function displayNum(num){
    result.value+=num
}

function allClear(){
    result.value=""
}
function evaluateExp(){
    result.value=eval(result.value)
}

function removeElement(){
    curExp=result.value
    result.value=curExp.slice(0,-1)
}