const cachorros = require('./database/cachorros.json')

let animal = {
    nome: 'zoe',
    sexo: 'm',
    castrado: 0,
    dataDeNascimento: "2008/03/25",
    peso: 12
}

let CodigoRandow = ()=>{
    let numeroAelatorio = Math.random()*999
    let codigo = Math.round(numeroAelatorio)
    return codigo
   }

let adcionar = (novoPet)=>{
    let vacinas = []
    let servicos = []
    let novoCodigo =  CodigoRandow()
    //adicionar uma verificação se o codigo ja existe ai entao adicionar o codigo
    novoPet.codigo = novoCodigo
    novoPet.vacinas = vacinas
    novoPet.servicos = servicos



}
adcionar(animal)

console.log(animal)