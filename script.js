// // const gemas = document.getElementById("gemas");
// // console.log(gemas);

// // const gridSection = document.getElementsByClassName("grid-section");
// // console.log(gridSection[1]);

// // const primeiraLi = document.querySelector("li");
// // console.log(primeiraLi);

// // const linksInternos = document.querySelector('[href^="#"');
// // console.log(linksInternos);

// // const gemasImg = document.querySelectorAll(".gemas img");
// // console.log(gemasImg);

// // const gridSectionHTML = document.getElementsByClassName("grid-section");
// // const gridSectionNode = document.querySelectorAll(".grid-section");

// // // console.log(gridSectionHTML);
// // // console.log(gridSectionNode);

// // gridSectionNode.forEach(function(item, index){
// //     console.log(item);
// // });

// // const arrayGrid = Array.from(gridSectionHTML);

// // Retorne no console todas as imagens do site
// const retornaImg = document.querySelectorAll("img");
// console.log(retornaImg);
// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const retornaImgComImg = document.querySelectorAll('[src^="img/imagem"]');
// console.log(retornaImgComImg);
// // Selecione todos os links internos (onde o href começa com #)
// const retornaLinksInternos = document.querySelectorAll('[href^="#"');
// console.log(retornaLinksInternos);
// // Selecione o primeiro h2 dentro de .animais-descricao
// const selecionaH2 = document.querySelector(".gemas-descricao h2");
// console.log(selecionaH2);
// // Selecione o último p do site
// const ultimoP = document.querySelectorAll("p");
// console.log(ultimoP[ultimoP.length-1].innerText);
// // Ou
// console.log(ultimoP[--ultimoP.length].innerText);

// const imgs = document.querySelectorAll('img');

// let i = 0;
// imgs.forEach((item, index, array) => {
//     // console.log(item, index, array);
// });

// const titulos = document.getElementsByClassName("titulo");
// const titulosArray = Array.from(titulos);
// console.log(titulos);
// titulosArray.forEach(function(item){
//     titulosArray.pop();
//     console.log(item);
// });


// // Mostre no console cada parágrado do site
// const paragrafos = document.querySelectorAll("p");
// paragrafos.forEach((item)=> {
//     console.log(item);
// })
// // Mostre o texto dos parágrafos no console
// paragrafos.forEach((item)=> {
//     console.log(item.innerText);
// })
// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);




// // Adicione a classe ativo a todos os itens do menu
// const itensMenu = document.querySelectorAll(".menu a");
// console.log(itensMenu);
// itensMenu.forEach((item) => {
//     item.classList.add("ativo");
// })

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// itensMenu.forEach((item) => {
//     item.classList.remove("ativo");
// })

// itensMenu[0].classList.add("ativo")
// // Verifique se as imagens possuem o atributo alt
// const imgs = document.querySelectorAll("img");
// imgs.forEach((img) => {
//     const possuiAtributo = img.hasAttribute("alt");
//     console.log(possuiAtributo);
// })
// // Modifique o href do link externo no menu
// const linkExterno = document.querySelector("a[href^='http']");
// linkExterno.setAttribute("href", "https://google.com");
// console.log(linkExterno);

// const listaGemas = document.querySelector(".gemas-lista");
// console.log(listaGemas.clientHeight); //total sem o scroll das imagens
// const height = listaGemas.scrollHeight;
// console.log(height); //Total com o scroll

// const gemasTop = listaGemas.offsetTop;
// console.log(gemasTop)

// const quartzo = document.querySelector('h2'); 
// const h2Quartzo = quartzo.offsetLeft; //distância do primeiro parágrafo até a esquerda

// const h2rect = quartzo.getBoundingClientRect(); //todas as medidas do objeto
// console.log(h2rect);

// console.log(
//     window.innerWidth,
//     window.outerWidth, //pega a janela inteira, até com o console
//     window.innerHeight,
//     window.outerHeight,
//     window.pageYOffset,
// );

// if(h2rect.top < 0) {
//     console.log("Passou do elemento");
// }

// //VERIFICAR TAMANHO DA TELA
// const small = window.matchMedia("(max-width: 600px)");

// if(small.matches) {
//     console.log("Tela menor que 600px")
// }
// else {
//     console.log("Tela maior que 600px")
// }



// Verifique a distância da primeira imagem
// em relação ao topo da página
// const primeiraImagem = document.querySelector('img');
// const distanciaTop = primeiraImagem.offsetTop;
// console.log(distanciaTop);

// // Retorne a soma da largura de todas as imagens
// function somaImagens(){
// const todasImagens = document.querySelectorAll("img");
// let soma = 0
// todasImagens.forEach((imagem)=> {
//     soma += imagem.offsetWidth;
// });
//     console.log(soma);
// }

// window.onload = function() {
//     somaImagens();
// }
// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const links = document.querySelectorAll('a');

// links.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;
//   if(linkWidth >= 48 && linkHeight >= 48) {
//     console.log(link, 'Possui boa acessibilidade')
//   } else {
//     console.log(link, 'Não possui boa acessibilidade')
//   }
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu
// const browserSmall = window.matchMedia("(max-width: 720px)").matches;

// if(browserSmall) {
//     const menu = document.querySelector(".menu");
//     menu.classList.add("menu-mobile");
// }

// const img = document.querySelector('img');

// function callback(event){
//     console.log(event);
// }
// img.addEventListener("click", callback);


//CALLBACK - MOSTRA O QUE CLICOU
// const gemasLista = document.querySelector('.gemas-lista');

// function callbackLista(event) {
//     console.log(event.target);
//     console.log(event.type);
// }
// gemasLista.addEventListener("click", callbackLista);



// //PREVENT DEFAULT
// const linkExterno = document.querySelector("a[href^='http'");
// function handleLinkExterno(event){
//     // event.preventDefault();
//     console.log('event');
// }
// linkExterno.addEventListener('click', handleLinkExterno);



// const h1 = document.querySelector('h1');

// function handleEvent(event) {
//     console.log(event.type, event);
// }

// h1.addEventListener('click', handleEvent); //Click do mouse
// h1.addEventListener('mouseenter', handleEvent); //Mouse entra no objeto
// h1.addEventListener('mousemove', handleEvent); //Mouse se move dentro do objeto


// window.addEventListener('scroll', handleEvent); // Caso seja scrollado
// window.addEventListener('resize', handleEvent); //Caso seja mudado o tamanho da tela
// window.addEventListener('keydown', handleEvent); //Mostra que tecla foi clicada


//ADD UMA FUNÇÃO À UM BOTÃO
// function handleKeyboard(event) {
//     if(event.key === 'f') {
//         document.body.classList.toggle('fullscreen');
//     }
//     console.log(event.key);
// }
// window.addEventListener('keydown', handleKeyboard);

//AO CLICAR DEMONSTRA A IMAGEM SELECIONAD
// const imgs = document.querySelectorAll("img");

// function handleImg(event) {
//     console.log(event.target);
// }

// imgs.forEach((img)=> {
//     img.addEventListener('click', handleImg);
// });

//EXERCÍCIO EVENTS
// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll("a[href^='#']");

function handleLink(evento) {
    evento.preventDefault();
    linksInternos.forEach((link)=>{
        link.classList.remove("ativo"); //REMOVE O ATIVO ATUAL
    });
    this.classList.add("ativo"); //ADD O ATIVO SOMENTE NO QUAL PRECISA
}

linksInternos.forEach((link) => {
    link.addEventListener('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosBody = document.querySelectorAll("body *");

function elementoSelecionado(evento) {
    console.log(evento.currentTarget);
}

elementosBody.forEach((elemento) => {
    elemento.addEventListener('click', elementoSelecionado);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function elementoSelecionado(evento) {
    evento.currentTarget.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
