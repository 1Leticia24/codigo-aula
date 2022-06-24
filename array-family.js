let familia = [{nome:"Letícia", idade: 19, corFavorita:"branco"},
 {nome:"Vinicíus", idade:25, corFavorita:"preto"},
 {nome:"Maloka", idade:2, corFavorita:"vermelho"},
 {nome:"Zé", idade:2, corFavorita:"verde"},
 {nome:"Nico", idade:1, corFavorita:"azul"}],
let i = 0

function objetos (familia) {
    while(i < familia.length) {
        console.log(familia[i]);
        i++
    }

}

objetos(familia)