function init() {
var resBox = document.querySelector('#res');
var butnClr = document.querySelector('#btnClr');
var butnEql = document.querySelector('#btnEql');  
var resStr = '';
var btns = document.querySelectorAll('#btns>button');
var ops = document.querySelectorAll('#btns>.op');
for(let i=0;i<btns.length;i++) {
    if(btns[i].id !== 'btnClr' && btns[i].id !== 'btnEql')
    btns[i].addEventListener('click', displayRes);
}

function lock() {
    for(let i=0;i<ops.length;i++) {
    if(!ops[i].hasAttribute('disabled')) {
    ops[i].onclick = function () {
    for(let i=0;i<ops.length;i++) {
        ops[i].setAttribute('disabled', 'true');
    }
    }
    }
    else {
    ops[i].removeAttribute('disabled');
    }
}
}
lock();

butnClr.onclick = clear;
butnEql.onclick = count;


            

function displayRes(e, res=null) {
    if(res==null && e!== null) {
    if(resStr[0] && resStr[0].class!=='op') {
        resStr = resStr.concat(e.target.innerHTML);
        resBox.innerHTML = resStr;
    }
    else if(!resStr[0] && e.target.class!=='op') {
        resStr = resStr.concat(e.target.innerHTML);
        resBox.innerHTML = resStr;
    }
    }
    else {
    clear();
    resBox.innerHTML = res;
    }
    
}


function count(e) {
    if(resStr!=='') {
    
    var op1 = '';
    var op2 = '';
    var op = '';
    var res;
    for(var i=0;i<resStr.length;i++) {
        if(resStr[i] !=='1' && resStr[i] !=='0') {
        op=op.concat(resStr[i]);
        continue;
        }
        if(op=='') {
        op1 = op1.concat(resStr[i]);
        }
        else {
        op2 = op2.concat(resStr[i]);
        }
        

    }
    
    if(op!==''){
        op1 = parseInt(op1, 2);
        op2 = parseInt(op2, 2);
        console.log(op1);
        console.log(op2);
        switch(op) {
        case '+': res = op1+op2;
        break;
        case '-': res = op1-op2;
        break;
        case 'x': res = op1*op2;
        break;
        case '/': res = op1/op2;
        break;
        }
        res = (res>>>0).toString(2);
        
    }                
    else {
        op1 = parseInt(op1, 2);
        res = (op1>>>0).toString(2);
        
    }
    console.log(res);
        displayRes(null, res);
        lock();
    }
}

function clear() {
    lock();
    resStr = '';
    resBox.innerHTML = resStr;
}


}
init();