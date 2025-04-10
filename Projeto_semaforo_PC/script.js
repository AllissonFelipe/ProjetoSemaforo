function trocar_opcaoC() {
    let valor = document.getElementById("cima").value;
    if(valor == 2) {
        document.getElementById("blc2").style.backgroundImage='url("Imagens/Rua_Vertical_1mao.png")';
        document.getElementById("blc2").style.transform='rotate(0deg)';
    }else if(valor == 3){
        document.getElementById("blc2").style.backgroundImage='url("Imagens/Rua_Vertical_1mao.png")';
        document.getElementById("blc2").style.transform='rotate(180deg)';
    }else{
        document.getElementById("blc2").style.backgroundImage='url("Imagens/Rua_Vertical_2maos.png")';  
    }
}
function trocar_opcaoB() {
    let valor = document.getElementById("baixo").value;
    if(valor == 2) {
        document.getElementById("blc8").style.backgroundImage='url("Imagens/Rua_Vertical_1mao.png")';
        document.getElementById("blc8").style.transform='rotate(0deg)';
    }else if(valor == 3){
        document.getElementById("blc8").style.backgroundImage='url("Imagens/Rua_Vertical_1mao.png")';
        document.getElementById("blc8").style.transform='rotate(180deg)';
    }else{
        document.getElementById("blc8").style.backgroundImage='url("Imagens/Rua_Vertical_2maos.png")';
    }
}
function trocar_opcaoE() {
    let valor = document.getElementById("esquerda").value;
    if(valor == 2) {
        document.getElementById("blc4").style.backgroundImage='url("Imagens/Rua_Horizontal_1mao.png")';
        document.getElementById("blc4").style.transform='rotate(0deg)';
    }else if(valor == 3){
        document.getElementById("blc4").style.backgroundImage='url("Imagens/Rua_Horizontal_1mao.png")';
        document.getElementById("blc4").style.transform='rotate(180deg)';
    }else{
        document.getElementById("blc4").style.backgroundImage='url("Imagens/Rua_Horizontal_2maos.png")';
    }
}
function trocar_opcaoD() {
    let valor = document.getElementById("direita").value;
    if(valor == 2){    
        document.getElementById("blc6").style.backgroundImage='url("Imagens/Rua_Horizontal_1mao.png")';
        document.getElementById("blc6").style.transform='rotate(0deg)';
    } else if(valor == 3){
        document.getElementById("blc6").style.backgroundImage='url("Imagens/Rua_Horizontal_1mao.png")';
        document.getElementById("blc6").style.transform='rotate(180deg)';
    }else{
        document.getElementById("blc6").style.backgroundImage='url("Imagens/Rua_Horizontal_2maos.png")';
    }
}

function mudarSemaforoCima() {
    let semaforoCima = document.getElementById("cima-semaforo").style.backgroundColor;

    if (semaforoCima == "lightgreen") {
        document.getElementById("cima-semaforo").style.backgroundColor = "red";
    } else {
        document.getElementById("cima-semaforo").style.backgroundColor = "lightgreen";
        document.getElementById("direita-semaforo").style.backgroundColor = "red";
        document.getElementById("baixo-semaforo").style.backgroundColor = "red";
        document.getElementById("esquerda-semaforo").style.backgroundColor = "red";
    }
}
function mudarSemaforoDireita() {
    let semaforoDireita = document.getElementById("direita-semaforo").style.backgroundColor;

    if (semaforoDireita == "lightgreen") {
        document.getElementById("direita-semaforo").style.backgroundColor = "red";
    } else {
        document.getElementById("cima-semaforo").style.backgroundColor = "red";
        document.getElementById("direita-semaforo").style.backgroundColor = "lightgreen";
        document.getElementById("baixo-semaforo").style.backgroundColor = "red";
        document.getElementById("esquerda-semaforo").style.backgroundColor = "red";
    }
}
function mudarSemaforoBaixo() {
    let semaforoBaixo = document.getElementById("baixo-semaforo").style.backgroundColor;

    if (semaforoBaixo == "lightgreen") {
        document.getElementById("baixo-semaforo").style.backgroundColor = "red";
    } else {
        document.getElementById("cima-semaforo").style.backgroundColor = "red";
        document.getElementById("direita-semaforo").style.backgroundColor = "red";
        document.getElementById("baixo-semaforo").style.backgroundColor = "lightgreen";
        document.getElementById("esquerda-semaforo").style.backgroundColor = "red";
    }
}
function mudarSemaforoEsquerda() {
    let semaforoEsquerda = document.getElementById("esquerda-semaforo").style.backgroundColor;

    if (semaforoEsquerda == "lightgreen") {
        document.getElementById("esquerda-semaforo").style.backgroundColor = "red";
    } else {
        document.getElementById("cima-semaforo").style.backgroundColor = "red";
        document.getElementById("direita-semaforo").style.backgroundColor = "red";
        document.getElementById("baixo-semaforo").style.backgroundColor = "red";
        document.getElementById("esquerda-semaforo").style.backgroundColor = "lightgreen";
    }
}

function calcularRota() {
    // Variaveis da cor
    let cimaSemaforo = document.getElementById("cima-semaforo").style.backgroundColor;
    let direitaSemaforo = document.getElementById("direita-semaforo").style.backgroundColor;
    let baixoSemaforo = document.getElementById("baixo-semaforo").style.backgroundColor;
    let esquerdaSemaforo = document.getElementById("esquerda-semaforo").style.backgroundColor;

    // Variaveis das rotas
    let cima = document.getElementById("cima").value;
    let direita = document.getElementById("direita").value;
    let baixo = document.getElementById("baixo").value;
    let esquerda = document.getElementById("esquerda").value;

    let resultado = "";
    let teste = "";

    if (cimaSemaforo == "red" && direitaSemaforo == "red" && baixoSemaforo == "red" && esquerdaSemaforo == "red") {
        teste = "Selecione um semaforo!"
        document.getElementById("resultado").innerHTML = resultado;
    }
    // SOMENTE PARA O SEMAFORO DE CIMA!!!
    if (cimaSemaforo == "lightgreen") {
        if (direita == 2 || direita == 1) {
            resultado += "É possível ir para a direita."
        }
        if (baixo == 3 || baixo == 1) {
            resultado += "É possível ir para baixo."
        }
        if (esquerda == 3 || esquerda == 1) {
            resultado += "É possível ir para esquerda"
        }   
    }
    // SOMENTE PARA O SEMAFORO DA DIREITA!!!
    if (direitaSemaforo == "lightgreen") {
        if (cima == 2 || cima == 1) {
            resultado += "É possível ir para a cima."
        }
        if (baixo == 3 || baixo == 1) {
            resultado += "É possível ir para baixo."
        }
        if (esquerda == 3 || esquerda == 1) {
            resultado += "É possível ir para esquerda"
        }   
    }

    //SOMENTE PARA O SEMAFORO DE BAIXO!!!
    if (baixoSemaforo == "lightgreen") {
        if (cima == 2 || cima == 1) {
            resultado += "É possível ir para a cima."
        }
        if (direita == 2 || direita == 1) {
            resultado += "É possível ir para direita."
        }
        if (esquerda == 3 || esquerda == 1) {
            resultado += "É possível ir para esquerda"
        }   
    }


    // SOMENTE SEMAFORO DA ESQUERDA!!!
    if (esquerdaSemaforo == "lightgreen") {
        if (cima == 2 || cima == 1) {
            resultado += "É possível ir para a cima."
        }
        if (direita == 2 || direita == 1) {
            resultado += "É possível ir para direita."
        }
        if (baixo == 3 || baixo == 1) {
            resultado += "É possível ir para baixo"
        }   
    }


    document.getElementById("resultado").innerHTML = resultado;
}