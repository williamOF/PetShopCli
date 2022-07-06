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

   console.table( cachorros.find(toFind))
}


let listar = ()=>{
    console.table(cachorros)
}

let descrever =(id)=>{

    let petEncontrado = buscar(id)

    if(petEncontrado != undefined){
        console.table(petEncontrado)
    }else{
        console.error(`Não existe cachorro com o id ${id}`)
    }
    
}

let adcionar =(objeto)=>{
    
}


module.exports = {
    salvar : salvar,
    buscar : buscar,
    listar : listar,
    descrever: descrever

}



