const fs = require('fs')
const cachorros = require('./database/cachorros.json');
const path = require('path')

function salvar(){

    let caminho = path.resolve(__dirname+'/./database/cachorros.json')
    let novosDados = JSON.stringify(cachorros,null,4)
    
    fs.writeFileSync(caminho,novosDados)
}

function buscar(id){

    let toFind =(proucurar)=>{
        if(proucurar.id == id){
            return true
        }else {
            return false
        }
    }
   return cachorros.find(toFind)
}

let listar = ()=>{
    var descreverPet = cachorros.map(function(item){
        return{
                nome: item.nome,
                castrado: item.castrado,
                dataDeNascimento : item.dataDeNascimento,
                peso : item.peso,
                sexo : item.sexo,
                id : item.id
        }})
        console.table(descreverPet)
}

let descrever =(id)=>{

    const PET = buscar(id)

    if(PET != undefined){

        if(PET.sexo == 'm'){
            console.log(`Nome: ${PET.nome} (Macho)`)
        }else{
            console.log(`Nome: ${PET.nome} (Fêmea)`)
        }
      
       console.log(`Data De Nascimento: ${PET.dataDeNascimento}`)
       console.log(`Peso: ${PET.peso}`)
       console.log(`Castrado: ${PET.castrado}\n`)
       
       console.log('Vacinas')
       console.table(PET.vacinas)
       console.log('\nServços')
       console.table(PET.servicos)
    }else{
        console.log(`Não existe cachorro com o id ${id}`)
    }
}

let CodigoRandow = ()=>{
    let numeroAelatorio = Math.random()*9999
    let codigo = Math.round(numeroAelatorio)
    return codigo
   }

   let adicionar = (novoPet)=>{
    
    let vacinas = []
    let servicos = []
    let novoCodigo =  CodigoRandow()
    //adicionar uma verificação se o codigo ja existe ai entao adicionar o codigo
    novoPet.id = novoCodigo
    novoPet.vacinas = vacinas
    novoPet.servicos = servicos

    cachorros.push(novoPet)

    salvar()



}


module.exports = {
    salvar : salvar,
    buscar : buscar,
    listar : listar,
    descrever: descrever,
    adicionar: adicionar
}



