

function display(valuess){
    document.getElementById('results').value+=valuess
    return valuess
}

function solve(){
    let a = document.getElementById('results').value
    let b = eval(a);
    document.getElementById('output').value = b
    return b
}
function tage(){
    var per=document.getElementById('output').value
    var percent=document.getElementById('b2').value=per*100
    return percent
}
function clearScreem(){
        document.getElementById('results').value = ''
        document.getElementById('output').value = ''
    }


