// Mapeamento de Elementos HTML
const menos = document.getElementById("menos")
const mais = document.getElementById("mais")
const range = document.getElementById("range")
const contador = document.getElementById("contador")
const imagem = document.getElementById("img")

menos.addEventListener("click", function(){
    range.value = Number(range.value) - 5
    contador.innerHTML = Number( range.value )
    imagem.style.rotate = range.value + "deg"
})

mais.addEventListener("click", function(){
    range.value = Number(range.value) + 5
    contador.innerHTML = Number( range.value )
    imagem.style.rotate = range.value + "deg"
})

range.addEventListener("input", function(){
    console.log( Number( range.value ) )
    contador.innerHTML = Number( range.value )
    imagem.style.rotate = range.value + "deg"
})