function naruto() {
    var firstnumber = document.getElementById("firstnumber").value;
    var secondnumber = document.getElementById("secondnumber").value;
    var operador = document.getElementById("operador").value;


    if (isNaN(firstnumber) === false && isNaN(secondnumber) === false){
        var numero1 = parseInt(firstnumber);
        var numero2 = parseInt(secondnumber);

        switch(operador){
            case "+":
                var result = soma(numero1,numero2);
                break;
            case "-":
                var result = subtracao(numero1,numero2);
                break;
            case "/":
                var result = divisao(numero1,numero2);
                break;
            case "*":
                var result = multiplica(numero1,numero2);
                break;
            default:
                alert("operator not defined");
        }
        alert(result);
        
    }
else {
    alert('Please type a number');
}
  
}

function soma(n1,n2) {

    var soma =n1+n2;
    return soma;
}

function subtracao(n1,n2) {

    var subtracao=n1-n2;
    return subtracao;
}

function multiplica(n1,n2) {

    var multiplica=n1*n2;
    return multiplica;
}

function divisao(n1,n2) {

    var divisao=n1/n2;
    return divisao;
}