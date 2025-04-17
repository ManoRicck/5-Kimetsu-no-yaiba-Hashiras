const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado");
    });
});


// const botoes = document.querySelectorAll(".botao");
// const personagens = document.querySelectorAll(".personagem");

// let videoTimeout;

// botoes.forEach((botao, indice) => {
//     botao.addEventListener("click", () => {
//         // Limpa timeout anterior
//         clearTimeout(videoTimeout);

//         // Remove botão selecionado
//         document.querySelector(".botao.selecionado")?.classList.remove("selecionado");
//         botao.classList.add("selecionado");

//         // Remove personagem selecionado e pausa todos os vídeos
//         document.querySelectorAll(".personagem").forEach((personagem) => {
//             personagem.classList.remove("selecionado");

//             const video = personagem.querySelector(".video");
//             const imagem = personagem.querySelector(".imagem");

//             if (video) {
//                 video.pause();
//                 video.currentTime = 0;
//                 video.style.display = "none";
//             }

//             if (imagem) {
//                 imagem.style.display = "block";
//             }
//         });

//         // Ativa novo personagem
//         const personagemAtual = personagens[indice];
//         personagemAtual.classList.add("selecionado");

//         const videoAtual = personagemAtual.querySelector(".video");
//         const imagemAtual = personagemAtual.querySelector(".imagem");

//         if (videoAtual && imagemAtual) {
//             // Mostra imagem, esconde vídeo por enquanto
//             imagemAtual.style.display = "block";
//             videoAtual.style.display = "none";

//             // Aguarda 4 segundos para trocar
//             videoTimeout = setTimeout(() => {
//                 imagemAtual.style.display = "none";
//                 videoAtual.style.display = "block";
//                 videoAtual.play().catch((err) => {
//                     console.error("Erro ao tentar reproduzir o vídeo:", err);
//                 });
//             }, 4000);
//         }
//     });
// });