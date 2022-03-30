function getSelectValue()
{
 var selectdValue = document.getElementById("list").value;
 var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 

 if(selectdValue == "soma")
    calculo = soma(num1, num2);
 if(selectdValue == "subtracao")
    calculo = subtracao(num1, num2);
 if(selectdValue == "multiplicacao")
    calculo = multiplicacao(num1, num2);
 if(selectdValue == "divisao")
    calculo = divisao(num1, num2);

  alert(calculo);
}

function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}


