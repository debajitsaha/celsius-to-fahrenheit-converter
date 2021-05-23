function display()
{
    var n=document.getElementById("w").value
    
    f=(n*9/5)+32
    document.getElementById("result").innerHTML= "<b>"+f+" Fahrenheit"+"<b>"
}
function dis()
{
        var n=document.getElementById("h").value
        
        c=(n-32)*5/9;
        document.getElementById("result").innerHTML= "<b>"+c+" Celsius"+"<b>"
}
