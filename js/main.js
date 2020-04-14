//1 = pedra
//2 = papel
//3 = tesoura

//gerar a jogada da maquina
let cpu = 999
cpu = Math.floor(Math.random() * 3)

//recebimento da jogada do player

let jogadaplayer = 999

function pedra() {
    document.getElementById('jogadaPlayer1').src = "img/pedra.png"
    jogadaplayer = 0
    cpu = Math.floor(Math.random() * 3)
    
    if (cpu == 0) {
        document.getElementById('jogadaCpu').src = "img/pedra.png"
        document.getElementById('trofeu').src = "img/empate.png"
    } else if (cpu == 1) {
        document.getElementById('jogadaCpu').src = "img/papel.png"
        document.getElementById('trofeu').src = "img/trofeucpuwin.png"
    } else {
        document.getElementById('jogadaCpu').src = "img/tesoura.png"
        document.getElementById('trofeu').src = "img/trofeujogadorwin.png"
    }

}

function papel() {
    document.getElementById('jogadaPlayer1').src = "img/papel.png"
    jogadaplayer = 1
    cpu = Math.floor(Math.random() * 3)
    
    if (cpu == 0) {
        document.getElementById('jogadaCpu').src = "img/pedra.png"
        document.getElementById('trofeu').src = "img/trofeujogadorwin.png"
    } else if (cpu == 1) {
        document.getElementById('jogadaCpu').src = "img/papel.png"
        document.getElementById('trofeu').src = "img/empate.png"
    } else {
        document.getElementById('jogadaCpu').src = "img/tesoura.png"
        document.getElementById('trofeu').src = "img/trofeucpuwin.png"
    }

}

function tesoura() {
    document.getElementById('jogadaPlayer1').src = "img/tesoura.png"
    jogadaplayer = 2
    cpu = Math.floor(Math.random() * 3)
    
    if (cpu == 0) {
        document.getElementById('jogadaCpu').src = "img/pedra.png"
        document.getElementById('trofeu').src = "img/trofeucpuwin.png"
    } else if (cpu == 1) {
        document.getElementById('jogadaCpu').src = "img/papel.png"
        document.getElementById('trofeu').src = "img/trofeujogadorwin.png"
    } else {
        document.getElementById('jogadaCpu').src = "img/tesoura.png"
        document.getElementById('trofeu').src = "img/empate.png"
    }


}
