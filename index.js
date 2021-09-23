// Dated: 20 Sept 2021
// © Saikat Rano
// github:
// --Unit Converter--

let x = '';
function render() {
    if (x==''){scale1Val.value ='0'}
    else{scale1Val.value =  x}
    let val = (Number(x)*from(Number(scale1.value))*to(Number(scale2.value))).toFixed(2);
    if (val==''){scale2Val.value = '0'}
    else{scale2Val.value = val}
}
function from(scale1){ //Makes value to mitre
    let x;
    switch(scale1){
        case 1: //Mili
            x= 0.001;
            break;
        case 2: //Centi
            x= 0.01;
            break;
        case 3: //Deci
            x= 0.1;
            break;
        case 4: //*
            x= 1;
            break;
        case 5: //Kilo
            x= 1000;
            break;
        case 6: //Inch
            x= (1 / 39.3700787);
            break;
        case 7: //Foot
            x= (1 / 3.2808399);
            break;
    }
    return x;
}
function to(scale2){
    let a;
    switch(scale2){
        case 1: //Mili
            a= 1000;
            break;
        case 2: //Centi
            a= 100;
            break;
        case 3: //Deci
            a= 10;
            break;
        case 4: //*
            a= 1;
            break;
        case 5: //Kilo
            a= (1 / 1000);
            break;
        case 6: //Inch
            a= 39.3700787;
            break;
        case 7: //Foot
            a= 3.2808399;
            break;
    }
    return a;
}

//For HTML
function addValue(index, ths){
    if(index==1){
    scale1.value = ths.value;
    scale1.innerText = ths.innerText;
    }
   else{
    scale2.value = ths.value;
    scale2.innerText = ths.innerText;
    }
render();
}
