var __text = ""
function print(str,div){
    if(str == '-clear'){
        __text = ''
    }else{
        __text += str
    }
    if(arguments.length > 1){
        document.getElementById(div).innerHTML = __text;
    }else{
        document.getElementById("output").innerHTML = __text;
    }
}

var __dtext = ""
function debug(str){
    if(str == '-clear'){
        __dtext = ''
    }else{
        __dtext += str + "<br>"
    }
    document.getElementById("debug").innerHTML = __dtext;
}

function get_random_number(x,y){
    var items = new Array()
    for(var i=x; i<=y; i++){
        items.push(i)
    }
    return(items[Math.floor(Math.random()*items.length)]);
}

function get_random_element(array){
    return(array[get_random_number(0,array.length - 1)])
}
