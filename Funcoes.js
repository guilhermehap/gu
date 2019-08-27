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

function Exercicio22(){
    var idade = document.getElementById("idade").value;
    var peso = document.getElementById("peso").value;
    if(idade <= 20){
         if(peso <= 60 ){
            alert("O risco é de 9")
        }else if(peso <= 90){
            alert("O risco é de 8")
        }else if(peso > 90){
            alert("O risco é de 7")
        }
    }else if(idade <= 50){
        if(peso <= 60){
            alert("O risco é de 6")
        }else if(peso <= 90){
            alert("O risco é de 5")
        }else if(peso > 90){
            alert("O risco é de 4")
        } 
    }else if (idade > 50){
        if(peso <= 60){
            alert("O risco é de 3")
        }else if(idade <= 90){
            alert("O risco é de 2")
        }else if (idade > 90){
            alert("O risco é de 1")
        }
    }    
}