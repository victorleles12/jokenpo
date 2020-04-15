//1 = pedra
//2 = papel
//3 = tesoura

//inicialização da variavel das estatisticas do jogo
let winCpu = 0
let winPlayer = 0
let quantJogos = 0
let empates = 0


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
        document.getElementById('jogadaCpu').src = "img/pedraDireita.png"
        document.getElementById('trofeu').src = "img/empate.png"
        empates ++
        quantJogos ++
        document.getElementById('empates').innerHTML = empates
        document.getElementById('quantJogos').innerHTML = quantJogos
        
    } else if (cpu == 1) {
        document.getElementById('jogadaCpu').src = "img/papelDireita.png"
        document.getElementById('trofeu').src = "img/trofeucpuwin.png"
        winCpu ++
        quantJogos ++
        document.getElementById('winCpu').innerHTML = winCpu
        document.getElementById('quantJogos').innerHTML = quantJogos
    } else {
        document.getElementById('jogadaCpu').src = "img/tesouraDireita.png"
        document.getElementById('trofeu').src = "img/trofeujogadorwin.png"
        winPlayer ++
        quantJogos ++
        document.getElementById('winPlayer').innerHTML = winPlayer
        document.getElementById('quantJogos').innerHTML = quantJogos

    }

}

function papel() {
    document.getElementById('jogadaPlayer1').src = "img/papel.png"
    jogadaplayer = 1
    cpu = Math.floor(Math.random() * 3)
    
    if (cpu == 0) {
        document.getElementById('jogadaCpu').src = "img/pedraDireita.png"
        document.getElementById('trofeu').src = "img/trofeujogadorwin.png"
        winPlayer ++
        quantJogos ++
        document.getElementById('winPlayer').innerHTML = winPlayer
        document.getElementById('quantJogos').innerHTML = quantJogos
        
    } else if (cpu == 1) {
        document.getElementById('jogadaCpu').src = "img/papelDireita.png"
        document.getElementById('trofeu').src = "img/empate.png"
        empates ++
        quantJogos ++
        document.getElementById('empates').innerHTML = empates
        document.getElementById('quantJogos').innerHTML = quantJogos

    } else {
        document.getElementById('jogadaCpu').src = "img/tesouraDireita.png"
        document.getElementById('trofeu').src = "img/trofeucpuwin.png"
        winCpu ++
        quantJogos ++
        document.getElementById('winCpu').innerHTML = winCpu
        document.getElementById('quantJogos').innerHTML = quantJogos
        
    }

}

function tesoura() {
    document.getElementById('jogadaPlayer1').src = "img/tesoura.png"
    jogadaplayer = 2
    cpu = Math.floor(Math.random() * 3)
    
    if (cpu == 0) {
        document.getElementById('jogadaCpu').src = "img/pedraDireita.png"
        document.getElementById('trofeu').src = "img/trofeucpuwin.png"
        winCpu ++
        quantJogos ++
        document.getElementById('winCpu').innerHTML = winCpu
        document.getElementById('quantJogos').innerHTML = quantJogos

    } else if (cpu == 1) {
        document.getElementById('jogadaCpu').src = "img/papelDireita.png"
        document.getElementById('trofeu').src = "img/trofeujogadorwin.png"
        winPlayer ++
        quantJogos ++
        document.getElementById('winPlayer').innerHTML = winPlayer
        document.getElementById('quantJogos').innerHTML = quantJogos
        
    } else {
        document.getElementById('jogadaCpu').src = "img/tesouraDireita.png"
        document.getElementById('trofeu').src = "img/empate.png"
        empates ++
        quantJogos ++
        document.getElementById('empates').innerHTML = empates
        document.getElementById('quantJogos').innerHTML = quantJogos
    }


}
