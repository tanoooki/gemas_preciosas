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




// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu a");
console.log(itensMenu);
itensMenu.forEach((item) => {
    item.classList.add("ativo");
})

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
    item.classList.remove("ativo");
})

itensMenu[0].classList.add("ativo")
// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
    const possuiAtributo = img.hasAttribute("alt");
    console.log(possuiAtributo);
})
// Modifique o href do link externo no menu
const linkExterno = document.querySelector("a[href^='http']");
linkExterno.setAttribute("href", "https://google.com");
console.log(linkExterno);