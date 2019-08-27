function Exercicio7(){
    var salario = Number(document.getElementById("Informe salario").value)
    if (salario < 500){
        var novo = salario + salario * 30 / 100
        alert("Novo valor" + novo)
    }
    else{
        alert("Não teve aumento")
    }

}