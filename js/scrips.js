let cont = 0 
let res = document.querySelector('section#result')


function contar() {
    cont ++
res.innerHTML = `<h1>O contador está com <mark>${cont}</mark> cliques.</h1>;`
}

function zerar() {
    cont = 0
    res.innerHTML = `<h1>O contador está com <mark>${cont}</mark> cliques.</h1>;`

}