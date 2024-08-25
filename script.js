const message = [
    "Me desculpa.",
    "Sinto muito.",
    "Por favor, me desculpe.",
    "Não foi minha intenção.",
    "Posso fazer algo para compensar?",
    "Espero que me perdoe.",
    "Estou aprendendo com isso.",
    "Muito obrigado.",
    "Foi um erro da minha parte.",
    "Lamento profundamente o ocorrido.",
    "Sei que errei.",
    "Não quis te magoar.",
    "Cometi um engano.",
    "Prometo que não vai acontecer novamente.",
    "Você merece mais do que isso.",
    "Estou trabalhando para melhorar.",
    "Sua compreensão significa muito para mim.",
    "Espero que possamos superar isso juntos.",
    "Entendo se estiver chateado.",
    "Peço perdão de coração.",
    "Isso não reflete quem eu sou.",
    "Vou fazer o possível para corrigir.",
    "Sei que palavras não são suficientes, mas lamento muito.",
    "Lamento qualquer desconforto que causei.",
    "Entendo o impacto das minhas ações.",
    "Peço sua paciência enquanto conserto isso.",
    "Espero que possamos seguir em frente.",
    "Sei que posso fazer melhor, e vou provar isso.",
]


let clickCount = 0;

document.getElementById('circle').addEventListener('click', function() {
    const circle = document.getElementById('circle');
    let currentSize = circle.offsetWidth;


    if(clickCount < message.length - 1 ){
        circle.textContent = message[clickCount]
        clickCount++
    }


    if (currentSize > 20) {
        circle.style.width = (currentSize - 20) + 'px';
        circle.style.height = (currentSize - 20) + 'px';
        circle.style.fontSize = (currentSize - 20) / 10 + 'px';
    } else {
        circle.style.display = 'none';
        document.getElementById('thanks-message').style.display = 'block';
    }
});
