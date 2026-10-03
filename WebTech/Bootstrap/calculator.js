

function addition()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    output = parseInt(num1) + parseInt(num2);

    document.getElementById("h3").innerHTML= output;
}

function subtraction()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    output = parseInt(num1) - parseInt(num2);

    document.getElementById("h3").innerHTML= output;
}


function multiplication()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    output = parseInt(num1) * parseInt(num2);

    document.getElementById("h3").innerHTML= output;
}

function division()
{
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    output = parseInt(num1) / parseInt(num2);

    document.getElementById("h3").innerHTML= output;
}