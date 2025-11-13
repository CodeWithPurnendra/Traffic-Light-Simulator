
let input = prompt("Enter the trafic light signal: ");

if(input=="red" || input=="Red" || input=="RED"){
    console.log("Stop");
}

else if(input=="yellow" || input=="Yellow" || input=="YELLOW"){
    console.log("Get ready");
}

else{
    console.log("Go");
}