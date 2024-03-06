let tr = '';

const addData = (i) => {
    if (tr === '' && (i === '+' || i === '*' || i === '/')) {
        return;
    }else{
    tr += i;
    document.getElementById("no").value = tr;
    }
    
    // tr += i;
    // document.getElementById("no").value = tr;
}

function deleteLastCharacter() {
    let currentValue = document.getElementById("no").value;
    document.getElementById("no").value = currentValue.slice(0, -1);
}


function getAns(){
    let data = document.getElementById("no").value;
    let ans = eval(data);
    document.getElementById("no").value = ans;
    tr = '';
}

function clearAll(){
    document.getElementById("no").value = 0;
    tr = '';
}
