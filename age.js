var age = Number(prompt("whats your age?"));

if (age < 0){
    alert("error");
}

else if (age == 21){
    alert("happy 21st birthday!");
}

else if (age % Math.sqrt(age) == 0){
    alert("perfect square!");
}

else if (age % 2 !== 0){
    alert("your age is odd!");
}

